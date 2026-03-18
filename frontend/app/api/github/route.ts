import { NextResponse } from "next/server";
import { fetchGitHubStats } from "../../lib/github";

export const runtime = "edge";

export async function GET() {
  try {
    const data = await fetchGitHubStats();
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
