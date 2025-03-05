import { SignInType } from '@/types/auth';

import { UserResponse } from './response';

export type UserDTO = {
  idx: number;
  account: string;
  userId: string;
  nickname: string;
  image: string;
  background: string;
  character: string;
  type: SignInType;
  createdAt: Date;
  token: string;
  fcmToken?: string;
};

export const toUserDTO = (user: UserResponse): UserDTO => ({
  idx: user.idx,
  account: user.account,
  userId: user.user_id,
  nickname: user.nickname,
  image: user.image,
  background: user.background,
  character: user.character,
  type: user.type,
  createdAt: user.created_time,
  token: user.token,
  fcmToken: user.fcm_token,
});
