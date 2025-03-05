import { LetterResponse } from './response';

export interface LetterDTO {
  idx: number;
  text: string;
  createdAt: string;
}

export const toLetterDTO = (letter: LetterResponse): LetterDTO => ({
  idx: letter.idx,
  text: letter.text,
  createdAt: letter.created_time,
});

export const toLettersDTO = (letters: LetterResponse[]): LetterDTO[] => {
  return letters.map(toLetterDTO);
};
