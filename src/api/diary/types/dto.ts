import { DailyDiaryResponse, LikeDiaryResponse, MyDiaryResponse, SetVisibilityResponse } from './response';

export interface MyDiaryDTO {
  idx: number;
  userIdx: number;
  nickname: string;
  sticker: string;
  text: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
  isVisible: 1 | 0;
  likeCount: number;
  commentCount: number;
}

export interface DailyDiaryDTO {
  idx: number;
  sticker: string;
  text: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
  isVisible: 1 | 0;
}

export type LikeDiaryDTO = {
  likeCount: number;
  isLike: false;
};

export type SetVisibilityDTO = {
  isVisible: 1 | 0;
};

export const toMyDiaryDTO = (myDiary: MyDiaryResponse): MyDiaryDTO => ({
  idx: myDiary.idx,
  userIdx: myDiary.user_idx,
  nickname: myDiary.nickname,
  sticker: myDiary.sticker,
  text: myDiary.text,
  image: myDiary.image,
  createdAt: myDiary.created_time,
  updatedAt: myDiary.updated_time,
  isVisible: myDiary.is_visible,
  likeCount: myDiary.like_count,
  commentCount: myDiary.commentCount,
});

export const toMyDiariesDTO = (myDiaries: MyDiaryResponse[]): MyDiaryDTO[] => {
  return myDiaries.map(toMyDiaryDTO);
};

export const toDailyDiaryDTO = (dailyDiary: DailyDiaryResponse): DailyDiaryDTO => ({
  idx: dailyDiary.idx,
  sticker: dailyDiary.sticker,
  text: dailyDiary.text,
  image: dailyDiary.image,
  createdAt: dailyDiary.created_time,
  updatedAt: dailyDiary.updated_time,
  isVisible: dailyDiary.is_visible,
});

export const toDailyDiariesDTO = (dailyDiaries: DailyDiaryResponse[]): DailyDiaryDTO[] => {
  return dailyDiaries.map(toDailyDiaryDTO);
};

export const toLikeDiaryDTO = (likeDiaryResponse: LikeDiaryResponse): LikeDiaryDTO => ({
  likeCount: likeDiaryResponse.like_count,
  isLike: likeDiaryResponse.isLike,
});

export const toSetVisibilityDTO = (setVisibilityResponse: SetVisibilityResponse): SetVisibilityDTO => ({
  isVisible: setVisibilityResponse.is_visible,
});
