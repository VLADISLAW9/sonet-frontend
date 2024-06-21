'use client';
import { memo } from 'react';
import { useGetPostsList } from './lib/hooks/useGetPostsList';
import { PostsList } from '@/components/PostsList';
import { VStack } from '@/components/ui/Stack';

const HomePage = () => {
  const { data: posts, isPending, isError } = useGetPostsList();

  if (isPending) {
    return <VStack>Loading...</VStack>;
  }

  if (isError) {
    return <VStack>Error</VStack>;
  }

  return (
    <VStack>
      <PostsList posts={posts} />
    </VStack>
  );
};

export default memo(HomePage);
