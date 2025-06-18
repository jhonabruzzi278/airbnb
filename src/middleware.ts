// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isProtected = createRouteMatcher(['/profile(.*)?']);

export const onRequest = clerkMiddleware((auth, { request }) => {
  const { userId } = auth();
  if (!userId && isProtected(request)) {
    return Response.redirect(new URL('/login', request.url), 302);
  }
});
