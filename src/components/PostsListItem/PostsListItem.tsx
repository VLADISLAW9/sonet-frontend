import { memo } from 'react';
import { VStack } from '../ui/Stack';
import { Post } from '@/shared/types';
import { cn } from '@/shared/lib/utils';

interface PostsListItemProps {
  className?: string;
  post: Post;
}

export const PostsListItem = memo((props: PostsListItemProps) => {
  const { className, post } = props;
  return (
    <VStack max className={cn('border-b-2 p-5', className)}>
      {post.title}
    </VStack>
  );
});
