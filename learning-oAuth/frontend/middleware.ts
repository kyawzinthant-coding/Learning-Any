import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  console.log("here");

  try {
    return await auth0.middleware(request);
  } catch (err) {
    console.error("Middleware auth error:", err);
    return new Response("Unauthorized", { status: 401 });
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
