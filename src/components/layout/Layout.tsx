'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { getRouteLogin, getRouteRegistration } from '@/shared/consts/router';

import { AuthLayout } from './AuthLayout/AuthLayout';
import { MainLayout } from './MainLayout/MainLayout';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  const pathname = usePathname();

  if (pathname === getRouteLogin() || pathname === getRouteRegistration()) {
    return <AuthLayout>{children}</AuthLayout>;
  }
  return <MainLayout>{children}</MainLayout>;
};
