import { FlowerpotResponse } from './response';

export type FlowerpotDTO = {
  level: number;
  exp: number;
  maxExp: number;
  wateringCount: number;
  loveCount: number;
  showBadge: boolean;
};

export const toFlowerpotDTO = (flowerpot: FlowerpotResponse): FlowerpotDTO => ({
  level: flowerpot.level,
  exp: flowerpot.exp,
  maxExp: flowerpot.max_exp,
  wateringCount: flowerpot.watering_count,
  loveCount: flowerpot.love_count,
  showBadge: flowerpot.showBadge,
});
