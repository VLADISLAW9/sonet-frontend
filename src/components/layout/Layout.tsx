'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { getRouteSignIn } from '@/shared/consts/router';

import { AuthLayout } from './AuthLayout/AuthLayout';
import { MainLayout } from './MainLayout/MainLayout';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  const pathname = usePathname();

  if (pathname === getRouteSignIn()) {
    return <AuthLayout>{children}</AuthLayout>;
  }
  return <MainLayout>{children}</MainLayout>;
};
