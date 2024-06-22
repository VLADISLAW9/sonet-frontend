'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { HStack } from '../ui/Stack';
import { Sidebar } from './Sidebar/Sidebar';
import { Toolbar } from './Toolbar/Toolbar';
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
  } else {
    return <MainLayout>{children}</MainLayout>;
  }
};
