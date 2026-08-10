"use client";
import { useEffect } from "react";

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitExitFullscreen?: () => Promise<void> | void;
  webkitFullscreenElement?: Element;
};

/**
 * Browsers refuse document.documentElement.requestFullscreen() unless it is
 * called synchronously inside a real user gesture — there is no automatic
 * fullscreen on page load. Call this from a click/keydown handler.
 */
export function requestFullscreen() {
  if (document.fullscreenElement) return;
  const el = document.documentElement as FullscreenElement;
  const request = el.requestFullscreen?.bind(el) ?? el.webkitRequestFullscreen?.bind(el);
  request?.()?.catch?.(() => {
    /* user or browser denied it — nothing more we can do */
  });
}

export function exitFullscreen() {
  const doc = document as FullscreenDocument;
  if (!doc.fullscreenElement && !doc.webkitFullscreenElement) return;
  const exit = doc.exitFullscreen?.bind(doc) ?? doc.webkitExitFullscreen?.bind(doc);
  exit?.()?.catch?.(() => {
    /* user or browser denied it — nothing more we can do */
  });
}

/**
 * Safety net for the (rare) case a visitor's first gesture happens outside
 * BootScreen's explicit "press any key to boot" gate.
 */
export function useAutoFullscreen() {
  useEffect(() => {
    function onFirstInteraction() {
      requestFullscreen();
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    }

    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);
}
