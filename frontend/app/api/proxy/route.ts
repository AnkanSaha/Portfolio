import { NextRequest, NextResponse } from "next/server";
import { fetchProxied, proxyErrorPage, validateTargetUrl, ProxyError } from "../../lib/proxy";

// Deliberately never forwards the upstream response's own headers (in
// particular X-Frame-Options / Content-Security-Policy / Set-Cookie) — this
// route's whole purpose is to let the browser evaluate framing permission
// against OUR response, not the target's.
//
// No rate limiting is implemented here — that needs to live at the
// Cloudflare zone level (a Rate Limiting rule) rather than in this route,
// since anything enforced only in-process resets on every cold start.
export async function GET(request: NextRequest) {
  try {
    const target = validateTargetUrl(request.nextUrl.searchParams.get("url"));
    const { body, status, contentType } = await fetchProxied(target);
    return new NextResponse(body, { status, headers: { "content-type": contentType } });
  } catch (err) {
    if (err instanceof ProxyError) {
      return new NextResponse(proxyErrorPage(err.message), {
        status: err.status,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return new NextResponse(proxyErrorPage("Something went wrong opening that page."), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
}
