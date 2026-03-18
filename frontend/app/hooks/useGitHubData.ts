"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchGitHubData } from "../store/slices/githubSlice";

export function useGitHubData() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((s: RootState) => s.github);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGitHubData());
    }
  }, [status, dispatch]);

  return { data, status, error };
}
