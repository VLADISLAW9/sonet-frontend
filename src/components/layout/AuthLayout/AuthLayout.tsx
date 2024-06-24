import type { ReactNode } from 'react';
import { memo } from 'react';

import { VStack } from '@/components/ui/Stack';

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
