import type { Post } from '@/shared/types';

import { api } from '../../instance';

export type GetPostsConfig = AxiosRequestConfig;

type PostsResponse = Post[];

export const getPosts = async (requestConfig?: GetPostsConfig) =>
  api.get<PostsResponse>('/Post', requestConfig?.config);
