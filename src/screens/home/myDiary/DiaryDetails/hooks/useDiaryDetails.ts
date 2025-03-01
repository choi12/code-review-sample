import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import { APIGetDiary, APIGetDiaryParams } from '@/api/diary/APIGetDiary';
import { QUERY_KEYS } from '@/constants';
import useUserInfo from '@/hooks/store/useUserInfo';
import { REALTIME_QUERY_CONFIG } from '@/utils/config/query';

interface UseDiaryDetailsProps {
  diaryIdx: number;
}

function useDiaryDetails({ diaryIdx }: UseDiaryDetailsProps) {
  const queryClient = useQueryClient();
  const userNickname = useUserInfo('nickname');

  const {
    data: diary,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    ...REALTIME_QUERY_CONFIG,
    queryKey: [QUERY_KEYS.DIARY, diaryIdx],
    queryFn: async () => {
      const params: APIGetDiaryParams = { diaryIdx };
      return APIGetDiary(params);
    },
  });

  const isVisible = useMemo(() => !!diary?.isVisible, [diary?.isVisible]);
  const isMyDiary = useMemo(() => diary?.nickname === userNickname, [diary, userNickname]);

  const setIsVisible = useCallback(
    (visible: boolean) => {
      if (!diary) return;
      queryClient.setQueryData([QUERY_KEYS.DIARY, diaryIdx], {
        ...diary,
        isVisible: visible,
      });
    },
    [diary, diaryIdx, queryClient],
  );

  return { diary, refetch, isLoading, isError, isMyDiary, isVisible, setIsVisible };
}

export default useDiaryDetails;
