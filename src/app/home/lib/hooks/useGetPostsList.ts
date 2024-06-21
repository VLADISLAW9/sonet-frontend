import { getPosts } from '@/shared/api/requests/posts';
import { useQuery } from '@tanstack/react-query';

export const useGetPostsList = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await getPosts();
      return response.data.posts;
    }
  });
