import { STORAGE_KEY } from '@/constants';

import { storage } from './storage';

export const setAccessToken = (token: string): void => {
  storage.set(STORAGE_KEY.AUTH.ACCESS_TOKEN, token);
};

export const getAccessToken = (): string | null => {
  return storage.get(STORAGE_KEY.AUTH.ACCESS_TOKEN);
};
