import { Mission, RewardItem } from '@/types/mission';

export type MissionResponse = {
  idx: number;
  type: Mission;
  count: number;
  max_count: number;
  is_completed: 0 | 1;
};

export type MissionsResponse = {
  completed: MissionResponse[];
  inProgress: MissionResponse[];
};

export type CompleteMissionResponse = {
  missions: MissionsResponse;
  reward: RewardItem;
};
