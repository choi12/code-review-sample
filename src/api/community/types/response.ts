import { MyDiaryResponse } from '@/api/diary/types';

export interface CommunityDiaryResponse extends MyDiaryResponse {
  user_image: string;
  background: string;
  character: string;
  isLike: boolean;
}
