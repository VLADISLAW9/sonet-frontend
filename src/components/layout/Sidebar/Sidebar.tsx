import { Logotype } from '@/components/ui/Logotype';
import { VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { memo } from 'react';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  return (
    <VStack gap='32' max className={cn('w-[15%] py-3', className)}>
      <Logotype />
      <VStack>
        <Link href={'/'}>
          <Typography variant='typography20_regular'>Home</Typography>
        </Link>
      </VStack>
    </VStack>
  );
});
