import { NextRequest, NextResponse } from "next/server";
import { fetchGitHubStats } from "../../lib/github";
import type { GitHubEntityKind } from "../../types/github";

// Only the identities this portfolio actually displays — keeps this route
// from doubling as an open proxy for arbitrary GitHub lookups.
const ALLOWED: Record<string, GitHubEntityKind> = {
  AnkanSaha: "user",
  nexoral: "org",
};

export async function GET(request: NextRequest) {
  const login = request.nextUrl.searchParams.get("login") ?? "AnkanSaha";
  const kind = ALLOWED[login];
  if (!kind) {
    return NextResponse.json({ error: "Unknown login" }, { status: 400 });
  }

  try {
    const data = await fetchGitHubStats(kind, login);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
