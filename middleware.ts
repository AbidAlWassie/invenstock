import { NextResponse, type NextRequest } from "next/server"
import { auth } from "./app/(auth)/auth"

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl
  const host = request.headers.get("host") || ""
  const baseDomain = process.env.BASE_DOMAIN || "frostcore.tech"
  const isLocalhost = host.includes("localhost")

  // Extract the subdomain
  let subdomain = ""
  if (isLocalhost) {
    const parts = host.split(":")
    subdomain = parts[0] === "demo" ? "demo" : ""
  } else {
    const parts = host.split(".")
    if (parts.length > 2) {
      subdomain = parts.slice(0, -2).join(".")
    }
  }

  console.log("Host:", host, "Subdomain:", subdomain, "Pathname:", url.pathname)

  // Allow access to auth-related paths and static files
  if (
    url.pathname.startsWith("/api/auth") ||
    url.pathname.startsWith("/auth") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Handle demo subdomain
  if (subdomain === "demo" || host.startsWith("demo.")) {
    if (!url.pathname.startsWith("/demo")) {
      url.pathname = "/demo" + url.pathname
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  // Handle requests to the root domain
  if ((isLocalhost && host === "localhost:3000") || (!isLocalhost && host === baseDomain)) {
    // Allow access to the root domain without redirection
    return NextResponse.next()
  }

  // For other subdomains, check authentication
  const session = await auth()

  if (session) {
    // User is authenticated, allow access
    return NextResponse.next()
  } else {
    // User is not authenticated, redirect to signin
    const signInUrl = new URL("/signin", url)
    signInUrl.host = isLocalhost ? "localhost:3000" : baseDomain
    return NextResponse.redirect(signInUrl)
  }
}

