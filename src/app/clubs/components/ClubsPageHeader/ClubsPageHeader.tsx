import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { HStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';

export const ClubsPageHeader = () => {
  const router = useRouter();

  return (
    <HStack gap='32'>
      <Button onClick={() => router.back()} tooltip='Назад' variant='ghost' size='icon'>
        <Icon Svg={ArrowLeft} />
      </Button>
      <Typography variant='typography20_semibold'>Клубы</Typography>
    </HStack>
  );
};
