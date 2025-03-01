import { formatAPIError } from '../formatAPIError';
import request from '../request';
import { APIResponse } from '../types';

import { LetterDTO, LetterResponse, toLetterDTO } from './types';

export interface APICreateLetterParams {
  text: string;
}

export const APICreateLetter = async ({ text }: APICreateLetterParams): Promise<LetterDTO> => {
  const OPERATION_NAME = '편지 등록';
  try {
    const response = await request.post<APIResponse<LetterResponse>>('/letter', { text });
    const responseData = response.data.data!;

    return toLetterDTO(responseData);
  } catch (error) {
    throw formatAPIError(error, OPERATION_NAME);
  }
};
