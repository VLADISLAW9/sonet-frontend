import type { User } from '@/shared/types';

import { api } from '../../instance';

export type RegisterParams = Omit<
  User,
  'passwordHash' | 'id' | 'dateOfCreation' | 'coins' | 'rating'
>;
export type RegisterConfig = AxiosRequestConfig<RegisterParams>;

export const register = async ({ params, config }: RegisterConfig) =>
  api.post<User>('/Auth/register', params, config);

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginConfig = AxiosRequestConfig<LoginParams>;

export const login = async ({ params, config }: LoginConfig) =>
  api.post<User>('/Auth/login', params, config);
