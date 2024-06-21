import { getRouteProfile } from '@/shared/consts/router';
import { MiddlewareFactory } from '@/shared/types';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export const withUser: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    const authOnlyUrls = [getRouteProfile()];

    if (authOnlyUrls?.some((path) => pathname.startsWith(path))) {
      const userId = false;
      if (!userId) {
        const url = new URL(`/home`, request.url);
        return NextResponse.redirect(url);
      }
    }
    return next(request, _next);
  };
};
