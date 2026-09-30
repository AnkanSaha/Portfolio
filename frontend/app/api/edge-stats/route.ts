import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  try {
    const res = await fetch("https://apiedge.nexoral.in/api/stats/public", {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        origin: "https://edge.nexoral.in",
        referer: "https://edge.nexoral.in/",
      },
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "unavailable" }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}