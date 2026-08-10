"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchGitHubData, selectGitHubEntry } from "../store/slices/githubSlice";

export function useGitHubData(login: string) {
  const dispatch = useAppDispatch();
  const wifiEnabled = useAppSelector((s) => s.system.wifiEnabled);
  const { data, status, error } = useAppSelector((s) => selectGitHubEntry(s, login));

  useEffect(() => {
    if (status === "idle" && wifiEnabled) {
      dispatch(fetchGitHubData(login));
    }
  }, [status, wifiEnabled, login, dispatch]);

  return { data, status, error, wifiEnabled };
}
