'use client';

import { memo } from 'react';
import Link from 'next/link';

import { Icon } from '@/components/ui/Icon';
import { Logotype } from '@/components/ui/Logotype';
import { VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/shared/lib/utils';

import { getSidebarItems } from './selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const sidebarItems = getSidebarItems();

  return (
    <VStack
      gap='32'
      align='center'
      max
      className={cn('w-[20%] py-2 min-h-screen top-0 sticky', className)}
    >
      <Logotype className='w-14 h-14' />
      <VStack gap='16'>
        {sidebarItems.map((sidebarItem) => (
          <Link className='flex items-center gap-2' href={sidebarItem.path} key={sidebarItem.path}>
            <Icon width={24} height={24} Svg={sidebarItem.Icon} />
            <Typography variant='typography20_regular'>{sidebarItem.text}</Typography>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
});
