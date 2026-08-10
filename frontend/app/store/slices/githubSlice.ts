"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { GitHubAPIResponse } from "../../types/github";

// Bump when GitHubAPIResponse's shape changes, so stale entries from an
// older shape (e.g. missing a newly-added field) are never trusted as a
// cache hit instead of naturally falling through to a fresh fetch.
const CACHE_VERSION = 2;
const CACHE_PREFIX = `github_cache_v${CACHE_VERSION}_`;
const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours

interface GitHubEntryState {
  data: GitHubAPIResponse | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface GitHubState {
  entries: Record<string, GitHubEntryState>;
}

const initialState: GitHubState = { entries: {} };

const emptyEntry: GitHubEntryState = { data: null, status: "idle", error: null };

export const fetchGitHubData = createAsyncThunk<GitHubAPIResponse, string>(
  "github/fetchData",
  async (login) => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(CACHE_PREFIX + login);
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

    const res = await fetch(`/api/github?login=${encodeURIComponent(login)}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data: GitHubAPIResponse = await res.json();

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(CACHE_PREFIX + login, JSON.stringify(data));
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
      .addCase(fetchGitHubData.pending, (state, action) => {
        const login = action.meta.arg;
        state.entries[login] = { data: state.entries[login]?.data ?? null, status: "loading", error: null };
      })
      .addCase(fetchGitHubData.fulfilled, (state, action) => {
        state.entries[action.meta.arg] = { data: action.payload, status: "succeeded", error: null };
      })
      .addCase(fetchGitHubData.rejected, (state, action) => {
        state.entries[action.meta.arg] = {
          data: null,
          status: "failed",
          error: action.error.message ?? "Unknown error",
        };
      });
  },
});

export function selectGitHubEntry(state: { github: GitHubState }, login: string): GitHubEntryState {
  return state.github.entries[login] ?? emptyEntry;
}

export default githubSlice.reducer;
