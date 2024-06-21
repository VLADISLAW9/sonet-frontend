import { Typography } from '@/components/ui/Typography';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { memo } from 'react';
import { getSidebarItems } from './selectors/getSidebarItems';
import { Icon } from '@/components/ui/Icon';
import { Logotype } from '@/components/ui/Logotype';
import { VStack } from '@/components/ui/Stack';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const sidebarItems = getSidebarItems();

  return (
    <VStack gap='32' max className={cn('w-[20%] py-3', className)}>
      <Logotype />
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
