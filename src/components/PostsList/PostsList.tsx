import { memo } from 'react';

import { VStack } from '@/components/ui/Stack';
import type { Post } from '@/shared/types';

import { PostsListItem } from '../PostsListItem';

interface PostsListProps {
  className?: string;
  posts: Post[];
}

export const PostsList = memo((props: PostsListProps) => {
  const { posts } = props;
  return (
    <VStack className='w-full' gap='0' max>
      {posts.map((post) => (
        <PostsListItem key={post.id} post={post} />
      ))}
    </VStack>
  );
});
