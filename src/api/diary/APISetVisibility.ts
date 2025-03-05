import { formatAPIError } from '../formatAPIError';
import request from '../request';
import { APIResponse } from '../types';

import { SetVisibilityDTO, SetVisibilityRequest, SetVisibilityResponse, toSetVisibilityDTO } from './types';

export interface APISetVisibilityParams {
  diaryIdx: number;
}

export const APISetVisibility = async ({ diaryIdx }: APISetVisibilityParams): Promise<SetVisibilityDTO> => {
  const OPERATION_NAME = '일기 공개 설정';
  try {
    const requestData: SetVisibilityRequest = { diary_idx: diaryIdx };
    const response = await request.post<APIResponse<SetVisibilityResponse>>('/diary/visibility', requestData);
    const responseData = response.data.data!;

    return toSetVisibilityDTO(responseData);
  } catch (error) {
    throw formatAPIError(error, OPERATION_NAME);
  }
};
