"use client";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openWindow } from "../../store/slices/windowsSlice";
import { APP_REGISTRY } from "../../apps/registry";

export function useOpenApp() {
  const dispatch = useAppDispatch();
  const activeWorkspace = useAppSelector((s) => s.system.activeWorkspace);

  return useCallback(
    (appId: string, params?: Record<string, unknown>, titleSuffix?: string) => {
      const app = APP_REGISTRY[appId];
      if (!app) return;
      dispatch(
        openWindow({
          appId,
          title: titleSuffix ? `${app.title} — ${titleSuffix}` : app.title,
          size: app.defaultSize,
          params,
          workspace: activeWorkspace,
        })
      );
    },
    [dispatch, activeWorkspace]
  );
}
