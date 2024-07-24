'use client';

import { memo } from 'react';

import { useHomePage } from '@/app/home/hooks/useHomePage';
import { PostsList } from '@/components/PostsList';
import { VStack } from '@/components/ui/Stack';

const HomePage = () => {
  const { state } = useHomePage();

  if (state.isLoading) {
    return <VStack>Loading...</VStack>;
  }

  if (state.isError || !state.posts) {
    return <VStack>Error</VStack>;
  }

  return (
    <VStack>
      <PostsList posts={state.posts} />
    </VStack>
  );
};

export default memo(HomePage);
