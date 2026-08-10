"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchGitHubData, selectGitHubEntry } from "../store/slices/githubSlice";

export function useGitHubData(login: string) {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((s) => selectGitHubEntry(s, login));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGitHubData(login));
    }
  }, [status, login, dispatch]);

  return { data, status, error };
}
