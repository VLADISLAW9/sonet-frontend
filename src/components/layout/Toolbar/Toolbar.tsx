import { memo } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { HStack, VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import { getRouteLogin, getRouteRegistration } from '@/shared/consts/router';
import { cn } from '@/shared/utils/cn';

interface ToolbarProps {
  className?: string;
}

export const Toolbar = memo((props: ToolbarProps) => {
  const { className } = props;
  const router = useRouter();

  return (
    <VStack align='center' className={cn('w-[20%] py-5 top-0 sticky', className)}>
      <HStack gap='16'>
        <Button onClick={() => router.push(getRouteLogin())}>
          <Typography variant='typography14_regular'>Войти</Typography>
        </Button>
        <Button onClick={() => router.push(getRouteRegistration())} variant='secondary'>
          <Typography variant='typography14_regular'>Зарегистрироваться</Typography>
        </Button>
      </HStack>
    </VStack>
  );
});
