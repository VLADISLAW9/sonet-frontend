import { memo } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { HStack, VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import { getRouteSignIn } from '@/shared/consts/router';
import { cn } from '@/shared/lib/utils';

interface ToolbarProps {
  className?: string;
}

export const Toolbar = memo((props: ToolbarProps) => {
  const { className } = props;
  const router = useRouter();

  return (
    <VStack align='center' className={cn('w-[20%] py-5', className)}>
      <HStack gap='16'>
        <Button onClick={() => router.push(getRouteSignIn())}>
          <Typography variant='typography14_regular'>Войти</Typography>
        </Button>
        <Button onClick={() => router.push(getRouteSignIn())} variant='secondary'>
          <Typography variant='typography14_regular'>Зарегистрироваться</Typography>
        </Button>
      </HStack>
    </VStack>
  );
});
