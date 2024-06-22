import { ReactNode, memo } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Toolbar } from '../Toolbar/Toolbar';
import { HStack, VStack } from '@/components/ui/Stack';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = memo((props: AuthLayoutProps) => {
  const { children } = props;
  return (
    <VStack className='h-screen' max align='center' justify='center'>
      {children}
    </VStack>
  );
});
