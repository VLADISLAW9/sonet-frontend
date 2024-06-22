import { ReactNode, memo } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Toolbar } from '../Toolbar/Toolbar';
import { HStack } from '@/components/ui/Stack';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { children } = props;
  return (
    <HStack align='start' max gap='32'>
      <Sidebar />
      <div className='w-full py-3 min-h-screen border-r-2 border-l-2 '>{children}</div>
      <Toolbar />
    </HStack>
  );
});
