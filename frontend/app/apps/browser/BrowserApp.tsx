"use client";
import { useRef, useState } from "react";
import { AppShell } from "../../os/ui";
import BrowserTabStrip from "./BrowserTabStrip";
import BrowserToolbar from "./BrowserToolbar";
import BrowserStartPage from "./BrowserStartPage";
import BrowserSearchResults from "./BrowserSearchResults";
import {
  START_PAGE,
  resolveInput,
  isStartPage,
  isSearchQuery,
  searchQueryFrom,
  proxiedSrc,
  realUrlFromProxiedLocation,
} from "./browserUtils";
import styles from "./BrowserApp.module.css";

interface Tab {
  id: string;
  history: string[];
  index: number;
  reloadNonce: number;
}

function newTab(): Tab {
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, history: [START_PAGE], index: 0, reloadNonce: 0 };
}

export default function BrowserApp() {
  const [tabs, setTabs] = useState<Tab[]>(() => [newTab()]);
  const [activeTabId, setActiveTabId] = useState(() => tabs[0].id);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];
  const currentUrl = activeTab.history[activeTab.index];

  function updateTab(id: string, updater: (t: Tab) => Tab) {
    setTabs((prev) => prev.map((t) => (t.id === id ? updater(t) : t)));
  }

  function navigate(target: string) {
    const resolved = resolveInput(target);
    updateTab(activeTabId, (t) => {
      if (t.history[t.index] === resolved) return t;
      return { ...t, history: [...t.history.slice(0, t.index + 1), resolved], index: t.index + 1 };
    });
  }

  function goBack() {
    updateTab(activeTabId, (t) => ({ ...t, index: Math.max(0, t.index - 1) }));
  }

  function goForward() {
    updateTab(activeTabId, (t) => ({ ...t, index: Math.min(t.history.length - 1, t.index + 1) }));
  }

  function reload() {
    updateTab(activeTabId, (t) => ({ ...t, reloadNonce: t.reloadNonce + 1 }));
  }

  function goHome() {
    navigate(START_PAGE);
  }

  function openNewTab() {
    const tab = newTab();
    setTabs((prev) => [...prev, tab]);
    setActiveTabId(tab.id);
  }

  function closeTab(id: string) {
    if (tabs.length <= 1) return;
    const index = tabs.findIndex((t) => t.id === id);
    const remaining = tabs.filter((t) => t.id !== id);
    setTabs(remaining);
    if (activeTabId === id) {
      setActiveTabId(remaining[Math.max(0, index - 1)].id);
    }
  }

  // The iframe always loads our own /api/proxy origin, so — unlike loading a
  // real cross-origin site directly — reading its location is same-origin
  // and safe. This is how in-page link clicks (which navigate the iframe
  // internally, bypassing our navigate() calls) get reflected back into the
  // address bar and back/forward history.
  function handleIframeLoad() {
    const liveHref = iframeRef.current?.contentWindow?.location.href;
    if (!liveHref) return;
    const realUrl = realUrlFromProxiedLocation(liveHref);
    if (!realUrl) return;
    navigate(realUrl);
  }

  return (
    <AppShell
      toolbar={
        <>
          <BrowserTabStrip
            tabs={tabs.map((t) => ({ id: t.id, url: t.history[t.index] }))}
            activeTabId={activeTabId}
            onSelect={setActiveTabId}
            onClose={closeTab}
            onNew={openNewTab}
          />
          <BrowserToolbar
            url={currentUrl}
            canGoBack={activeTab.index > 0}
            canGoForward={activeTab.index < activeTab.history.length - 1}
            onBack={goBack}
            onForward={goForward}
            onReload={reload}
            onHome={goHome}
            onNavigate={navigate}
          />
        </>
      }
    >
      {isStartPage(currentUrl) ? (
        <BrowserStartPage onNavigate={navigate} />
      ) : isSearchQuery(currentUrl) ? (
        <BrowserSearchResults query={searchQueryFrom(currentUrl)} onNavigate={navigate} />
      ) : (
        <iframe
          key={`${activeTab.id}-${activeTab.reloadNonce}`}
          ref={iframeRef}
          src={proxiedSrc(currentUrl)}
          className={styles.frame}
          title="Browser content"
          onLoad={handleIframeLoad}
        />
      )}
    </AppShell>
  );
}
