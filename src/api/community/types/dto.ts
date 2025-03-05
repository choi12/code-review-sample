import { MyDiaryDTO } from '@/api/diary/types';

import { CommunityDiaryResponse } from './response';

export interface CommunityDiaryDTO extends MyDiaryDTO {
  userImage: string;
  background: string;
  character: string;
  isLike: boolean;
}

export const toCommunityDiaryDTO = (communityDiary: CommunityDiaryResponse): CommunityDiaryDTO => ({
  idx: communityDiary.idx,
  userIdx: communityDiary.user_idx,
  nickname: communityDiary.nickname,
  sticker: communityDiary.sticker,
  text: communityDiary.text,
  image: communityDiary.image,
  createdAt: communityDiary.created_time,
  updatedAt: communityDiary.updated_time,
  isVisible: communityDiary.is_visible,
  likeCount: communityDiary.like_count,
  commentCount: communityDiary.commentCount,
  userImage: communityDiary.user_image,
  background: communityDiary.background,
  character: communityDiary.character,
  isLike: communityDiary.isLike,
});

export const toCommunityDiariesDTO = (communityDiaries: CommunityDiaryResponse[]): CommunityDiaryDTO[] => {
  return communityDiaries.map(toCommunityDiaryDTO);
};
