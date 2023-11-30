import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  afterAuth(auth, req) {
    // User is logged in, and is trying to access a public route (like marketing page)
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";
      // This app only work with organizations, so if the user is already in an organization, redirect to it
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }
      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }
    // User is not logged in, and is trying to access a private route (like dashboard)
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // User is logged in, but has not an organization, redirect to create one
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  }
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};