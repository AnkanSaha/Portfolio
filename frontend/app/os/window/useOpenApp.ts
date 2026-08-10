"use client";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { openWindow } from "../../store/slices/windowsSlice";
import { APP_REGISTRY } from "../../apps/registry";

export function useOpenApp() {
  const dispatch = useAppDispatch();

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
        })
      );
    },
    [dispatch]
  );
}
