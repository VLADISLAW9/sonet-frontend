import { useGetHomePostsListQuery } from '@/shared/api/hooks/useGetHomePostsListQuery';

export const useHomePage = () => {
  const { data, isPending, isError } = useGetHomePostsListQuery();

  return {
    state: {
      posts: data,
      isLoading: isPending,
      isError
    }
  };
};
