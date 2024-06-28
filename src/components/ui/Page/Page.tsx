import type { ReactNode } from 'react';
import { memo } from 'react';

import { VStack } from '@/components/ui/Stack';

interface PageProps {
  children: ReactNode;
  header?: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { children, header } = props;
  return (
    <VStack className='relative'>
      <div className='sticky px-5 py-4 backdrop-blur-2xl border-b-2 z-pageHeader top-0 w-full'>
        {header}
      </div>
      <div>{children}</div>
    </VStack>
  );
});
