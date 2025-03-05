import { CommentResponse } from './response';

export type CommentDTO = {
  idx: number;
  nickname: string;
  background: string;
  character: string;
  text: string;
  createdAt: string;
  userImage: string;
};

export const toCommentDTO = (comment: CommentResponse): CommentDTO => ({
  idx: comment.idx,
  nickname: comment.nickname,
  background: comment.background,
  character: comment.character,
  text: comment.text,
  createdAt: comment.created_time,
  userImage: comment.user_image,
});

export const toCommentsDTO = (comments: CommentResponse[]): CommentDTO[] => {
  return comments.map(toCommentDTO);
};
