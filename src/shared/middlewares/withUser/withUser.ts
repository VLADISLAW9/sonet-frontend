import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getRouteProfile } from '@/shared/consts/router';
import type { MiddlewareFactory } from '@/shared/types';

export const withUser: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { pathname } = request.nextUrl;

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
