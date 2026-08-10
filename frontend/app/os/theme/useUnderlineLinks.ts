"use client";
import { useEffect } from "react";
import { useSetting } from "../../hooks/useSetting";

export function useUnderlineLinks() {
  const [underline] = useSetting<boolean>("underlineLinks", false);

  useEffect(() => {
    document.documentElement.dataset.underlineLinks = String(underline);
    return () => {
      delete document.documentElement.dataset.underlineLinks;
    };
  }, [underline]);
}
