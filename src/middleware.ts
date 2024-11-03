import createMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";

const handleI18nRouting = createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
});

export async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/",
    "/(es|en)/:path*",
  ],
};
