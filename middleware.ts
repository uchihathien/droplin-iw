// This middleware file is intentionally minimal for the demo
// In a real application, this would contain proper authentication logic
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // In a real app, we would check for authentication tokens/cookies here
  // For this demo, we're not implementing full authentication
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
