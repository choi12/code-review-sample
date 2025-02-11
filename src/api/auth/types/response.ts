import { SignInType } from '@/types/auth';

export type UserResponse = {
  idx: number;
  account: string;
  user_id: string;
  nickname: string;
  image: string;
  background: string;
  character: string;
  type: SignInType;
  created_time: Date;
  token: string;
  fcm_token?: string;
};
