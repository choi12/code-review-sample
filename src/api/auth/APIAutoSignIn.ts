import { UnauthorizedError } from '@/types/errors';

import { formatAPIError } from '../formatAPIError';
import request from '../request';
import { APIResponse } from '../types';

import { AutoSignInRequest, toUserDTO, UserDTO, UserResponse } from './types';

export interface APIAutoSignInParams {
  accessToken: string;
}

export const APIAutoSignIn = async ({ accessToken }: APIAutoSignInParams): Promise<UserDTO> => {
  const OPERATION_NAME = '자동 로그인';
  try {
    const requestData: AutoSignInRequest = { access_token: accessToken };
    const response = await request.post<APIResponse<UserResponse>>('/auth/sign-in-auto/v2', requestData);
    const responseData = response.data.data!;

    return toUserDTO(responseData);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      throw error;
    }
    throw formatAPIError(error, OPERATION_NAME);
  }
};
