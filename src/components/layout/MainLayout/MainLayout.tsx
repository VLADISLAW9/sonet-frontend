import type { ReactNode } from 'react';
import { memo } from 'react';

import { HStack } from '@/components/ui/Stack';

import { Sidebar } from '../Sidebar/Sidebar';
import { Toolbar } from '../Toolbar/Toolbar';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { children } = props;
  return (
    <HStack align='start' max gap='32'>
      <Sidebar />
      <div className='w-full min-h-screen border-r-2 border-l-2 '>{children}</div>
      <Toolbar />
    </HStack>
  );
});
