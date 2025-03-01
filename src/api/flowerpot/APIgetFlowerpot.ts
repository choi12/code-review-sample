import { formatAPIError } from '../formatAPIError';
import request from '../request';
import { APIResponse } from '../types';

import { FlowerpotDTO, FlowerpotResponse, toFlowerpotDTO } from './types';

export const APIGetFlowerpot = async (): Promise<FlowerpotDTO> => {
  const OPERATION_NAME = '나의 화분';
  try {
    const response = await request.get<APIResponse<FlowerpotResponse>>('/flowerpot');
    const responseData = response.data.data!;

    return toFlowerpotDTO(responseData);
  } catch (error) {
    throw formatAPIError(error, OPERATION_NAME);
  }
};
