import { Mission } from '@/types/mission';

import { MissionResponse, MissionsResponse } from '.';

export type MissionDTO = {
  idx: number;
  type: Mission;
  count: number;
  maxCount: number;
  isCompleted: 0 | 1;
};

export type MissionsDTO = {
  completed: MissionDTO[];
  inProgress: MissionDTO[];
};

export const toMissionDTO = (response: MissionResponse): MissionDTO => ({
  idx: response.idx,
  type: response.type,
  count: response.count,
  maxCount: response.max_count,
  isCompleted: response.is_completed,
});

export const toMissionsDTO = (missions: MissionsResponse): MissionsDTO => ({
  completed: missions.completed.map(toMissionDTO),
  inProgress: missions.inProgress.map(toMissionDTO),
});
