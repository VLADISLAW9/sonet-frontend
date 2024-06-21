import { Post } from '@/shared/types';
import { api } from '../../instance';

export type GetPostsConfig = AxiosRequestConfig;

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const getPosts = async (requestConfig?: GetPostsConfig) =>
  api.get<PostsResponse>('/posts', requestConfig?.config);
