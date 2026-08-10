"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchGitHubData } from "../store/slices/githubSlice";

export function useGitHubData() {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((s) => s.github);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGitHubData());
    }
  }, [status, dispatch]);

  return { data, status, error };
}
