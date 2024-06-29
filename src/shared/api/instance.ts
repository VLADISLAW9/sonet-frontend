import axios from 'axios';

import { API_URL } from '../consts/api';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 404;
  }
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer 123`;
  }
  return config;
});
