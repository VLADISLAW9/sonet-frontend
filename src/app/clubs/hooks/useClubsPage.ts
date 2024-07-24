import { useGetClubsPostsListQuery } from '@/shared/api/hooks/useGetClubsPostsListQuery';

export const useClubsPage = () => {
  const { data, isPending, isError } = useGetClubsPostsListQuery();

  return {
    state: {
      posts: data,
      isLoading: isPending,
      isError
    }
  };
};
