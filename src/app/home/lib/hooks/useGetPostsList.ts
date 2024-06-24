import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/shared/api/requests/post';

export const useGetPostsList = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await getPosts();
      return response.data;
    }
  });
