import { memo } from 'react';

import { AppImage } from '@/components/ui/AppImage';
import { Icon } from '@/components/ui/Icon';
import { HStack, VStack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import LikeSvg from '@/shared/assets/icons/like.svg';
import RepostSvg from '@/shared/assets/icons/repost.svg';
import { cn } from '@/shared/lib/utils';
import { convertDate } from '@/shared/lib/utils/convertDate/convertDate';
import type { Post } from '@/shared/types';

interface PostsListItemProps {
  className?: string;
  post: Post;
}

export const PostsListItem = memo((props: PostsListItemProps) => {
  const { className, post } = props;
  return (
    <VStack gap='16' max className={cn('[&:not(:last-child)]:border-b-2 p-5', className)}>
      <HStack gap='16' max>
        <div className='w-10 h-10 rounded-full bg-primary' />
        <VStack className='transform translate-y-1' gap='0'>
          <Typography variant='typography16_semibold'>User</Typography>
          <Typography className='text-muted-foreground' variant='typography16_regular'>
            {convertDate(post.dateOfCreation, 'DD MMMM')}
          </Typography>
        </VStack>
      </HStack>
      <Typography variant='typography16_regular'>{post.description}</Typography>
      <AppImage
        className='rounded-3xl'
        width='100%'
        height={300}
        src='https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg'
        alt={post.title}
      />
      <HStack align='center' gap='32'>
        <HStack gap='4'>
          <Icon width={25} height={25} className='text-muted-foreground' Svg={EyeIcon} />
          <Typography className='text-muted-foreground' variant='typography16_regular'>
            {post.views}
          </Typography>
        </HStack>
        <HStack gap='4'>
          <Icon width={20} height={20} className='text-muted-foreground' Svg={LikeSvg} />
          <Typography className='text-muted-foreground' variant='typography16_regular'>
            {post.likes}
          </Typography>
        </HStack>
        <HStack gap='4'>
          <Icon width={21} height={21} className='text-muted-foreground' Svg={RepostSvg} />
          <Typography className='text-muted-foreground' variant='typography16_regular'>
            {post.reposts}
          </Typography>
        </HStack>
      </HStack>
    </VStack>
  );
});
