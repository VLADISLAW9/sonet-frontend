'use client';

import { memo } from 'react';

import { PostsList } from '@/components/PostsList';
import { VStack } from '@/components/ui/Stack';

import { useGetHomePostsListQuery } from './lib/hooks/useGetHomePostsListQuery';

const HomePage = () => {
  const { data: posts, isPending, isError } = useGetHomePostsListQuery();

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
