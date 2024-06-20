import { ReactNode, memo } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Toolbar } from '../Toolbar/Toolbar';
import { HStack } from '@/components/ui/Stack';

interface DesktopLayoutProps {
  content: ReactNode;
}

export const DesktopLayout = memo((props: DesktopLayoutProps) => {
  const { content } = props;
  return (
    <HStack align='start' max gap='32'>
      <Sidebar />
      <div className='w-full py-3 h-screen border-r-2 border-l-2 px-8'>{content}</div>
      <Toolbar />
    </HStack>
  );
});
