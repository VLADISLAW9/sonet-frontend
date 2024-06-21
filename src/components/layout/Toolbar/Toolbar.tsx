import { cn } from '@/shared/lib/utils';
import { VStack } from '@/components/ui/Stack';
import { memo } from 'react';

interface ToolbarProps {
  className?: string;
}

export const Toolbar = memo((props: ToolbarProps) => {
  const { className } = props;

  return (
    <VStack align='center' className={cn('w-[20%] py-3', className)}>
      Toolbar
    </VStack>
  );
});
