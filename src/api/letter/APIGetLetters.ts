import { formatAPIError } from '../formatAPIError';
import request from '../request';
import { APIResponse } from '../types';

import { LetterDTO, LetterResponse, toLettersDTO } from './types';

export interface APIGetLettersParams {
  skip: number;
}

export const APIGetLetters = async ({ skip }: APIGetLettersParams): Promise<LetterDTO[]> => {
  const OPERATION_NAME = '나의 편지 리스트';
  try {
    const response = await request.get<APIResponse<LetterResponse[]>>('/letter/list', { params: { skip } });
    const responseData = response.data.data!;

    return toLettersDTO(responseData);
  } catch (error) {
    throw formatAPIError(error, OPERATION_NAME);
  }
};
