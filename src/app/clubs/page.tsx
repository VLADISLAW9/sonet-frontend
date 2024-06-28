'use client';

import { memo } from 'react';

import { PostsList } from '@/components/PostsList';
import { Page } from '@/components/ui/Page';

import { ClubsPageHeader } from './components/ClubsPageHeader';
import { useGetClubsPostsListQuery } from './lib/hooks/useGetClubsPostsListQuery';

const ClubsPage = () => {
  const { data: posts, isPending, isError } = useGetClubsPostsListQuery();

  if (isPending)
    return (
      <Page header={<ClubsPageHeader />}>
        <p>Loading...</p>
      </Page>
    );

  if (isError)
    return (
      <Page header={<ClubsPageHeader />}>
        <p>Error</p>
      </Page>
    );

  return (
    <Page header={<ClubsPageHeader />}>
      <PostsList posts={posts} />
    </Page>
  );
};

export default memo(ClubsPage);
