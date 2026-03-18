"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { GitHubAPIResponse } from "../../types/github";

const CACHE_KEY = "github_cache";
const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours

interface GitHubState {
  data: GitHubAPIResponse | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: GitHubState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchGitHubData = createAsyncThunk<GitHubAPIResponse>(
  "github/fetchData",
  async () => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (raw) {
          const cached: GitHubAPIResponse = JSON.parse(raw);
          if (Date.now() - cached.fetchedAt < CACHE_TTL) {
            return cached;
          }
        }
      } catch {
        // ignore
      }
    }

    const res = await fetch("/api/github");
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data: GitHubAPIResponse = await res.json();

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      } catch {
        // ignore
      }
    }

    return data;
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGitHubData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchGitHubData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default githubSlice.reducer;
