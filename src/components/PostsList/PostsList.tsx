import { memo } from 'react';
import { Post } from '@/shared/types';
import { VStack } from '@/components/ui/Stack';
import { PostsListItem } from '../PostsListItem';

interface PostsListProps {
  className?: string;
  posts: Post[];
}

export const PostsList = memo((props: PostsListProps) => {
  const { className, posts } = props;
  return (
    <VStack gap='0' max>
      {posts.map((post) => (
        <PostsListItem key={post.id} post={post} className='first:border-t-2' />
      ))}
    </VStack>
  );
});
