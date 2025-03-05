export interface MyDiaryResponse {
  idx: number;
  user_idx: number;
  nickname: string;
  sticker: string;
  text: string;
  image?: string;
  created_time: string;
  updated_time?: string;
  deleted_time?: string;
  is_visible: 1 | 0;
  like_count: number;
  commentCount: number;
}

export interface DailyDiaryResponse {
  idx: number;
  sticker: string;
  text: string;
  image?: string;
  created_time: string;
  updated_time?: string;
  is_visible: 1 | 0;
}

export interface CreateDiaryResponse {
  diaryIdx: number;
}

export type LikeDiaryResponse = {
  like_count: number;
  isLike: false;
};

export type SetVisibilityResponse = {
  is_visible: 1 | 0;
};
