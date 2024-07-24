'use client';

import { memo } from 'react';

import { useClubsPage } from '@/app/clubs/hooks/useClubsPage';
import { PostsList } from '@/components/PostsList';
import { Page } from '@/components/ui/Page';

import { ClubsPageHeader } from './components/ClubsPageHeader';

const ClubsPage = () => {
  const { state } = useClubsPage();

  if (state.isLoading)
    return (
      <Page header={<ClubsPageHeader />}>
        <p>Loading...</p>
      </Page>
    );

  if (state.isError || !state.posts)
    return (
      <Page header={<ClubsPageHeader />}>
        <p>Error</p>
      </Page>
    );

  return (
    <Page header={<ClubsPageHeader />}>
      <PostsList posts={state.posts} />
    </Page>
  );
};

export default memo(ClubsPage);
