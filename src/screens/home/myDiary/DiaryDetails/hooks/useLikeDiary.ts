import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';

import { CommunityDiaryDTO } from '@/api/community/types';
import { APILikeDiary, APILikeDiaryParams } from '@/api/diary/APILikeDiary';
import { MESSAGE, QUERY_KEYS, TOAST_BOTTOM_OFFSET } from '@/constants';
import useToast from '@/hooks/store/useToast';
import useErrorToast from '@/hooks/ui/feedback/useErrorToast';
import { delay } from '@/utils/common/delay';
import { invalidateQueries } from '@/utils/query/invalidateQueries';

interface UseLikeDiaryProps {
  diary: CommunityDiaryDTO;
  isMyDiary: boolean;
}

const ANIMATION_DURATION = 500;

function useLikeDiary({ diary, isMyDiary }: UseLikeDiaryProps) {
  const queryClient = useQueryClient();

  const [isLikeAnimationVisible, setIsLikeAnimationVisible] = useState(false);

  const { showToast } = useToast();
  const handleErrorWithToast = useErrorToast();

  const isLiked = useMemo(() => diary.isLike, [diary.isLike]);
  const likeCount = useMemo(() => diary.likeCount, [diary.likeCount]);

  const { mutateAsync: likeDiaryMutation, isPending } = useMutation({
    mutationFn: async () => {
      const data: APILikeDiaryParams = {
        diaryIdx: diary.idx,
      };
      return APILikeDiary(data);
    },
    onSuccess: () => invalidateQueries.likeDiary(queryClient, diary.idx),
  });

  const handleLike = useCallback(async () => {
    if (isMyDiary) {
      showToast(MESSAGE.DIARY.LIKE_MY_DIARY, TOAST_BOTTOM_OFFSET.DIARY_DETAILS);
      return;
    }

    try {
      queryClient.setQueryData([QUERY_KEYS.DIARY, diary.idx], {
        ...diary,
        likeCount: isLiked ? diary.likeCount - 1 : diary.likeCount + 1,
        isLike: !isLiked,
      });

      const response = await likeDiaryMutation();
      if (!response.isLike) {
        return;
      }

      setIsLikeAnimationVisible(true);
      await delay(ANIMATION_DURATION);
    } catch (error) {
      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.DIARY_DETAILS);
    } finally {
      setIsLikeAnimationVisible(false);
    }
  }, [diary, isMyDiary, isLiked, showToast, likeDiaryMutation, handleErrorWithToast, queryClient]);

  return { handleLike, isLiked, likeCount, isLikeAnimationVisible, isPending };
}

export default useLikeDiary;
