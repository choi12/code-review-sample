import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import { APIGetCommunityDiaries, APIGetCommunityDiariesParams } from '@/api/community/APIGetCommunityDiaries';
import { CommunityDiaryDTO } from '@/api/community/types';
import { QUERY_KEYS, ITEMS_PER_PAGE } from '@/constants';
import { REALTIME_QUERY_CONFIG } from '@/utils/config/query';

import { useCommunityHeaderContext } from '../context/CommunityHeaderContext';

function useCommunityDiaries() {
  const { sort } = useCommunityHeaderContext();

  const {
    isLoading,
    data: communityDiariesData,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    isError,
  } = useInfiniteQuery({
    ...REALTIME_QUERY_CONFIG,
    queryKey: [QUERY_KEYS.COMMUNITY_DIARIES, sort],
    queryFn: ({ pageParam = 0 }) => {
      console.log('pageParam', pageParam);
      const params: APIGetCommunityDiariesParams = {
        skip: pageParam,
        sortType: sort,
      };
      return APIGetCommunityDiaries(params);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage && lastPage.length > 0 ? pages.length * ITEMS_PER_PAGE : undefined,
  });

  const communityDiaries: CommunityDiaryDTO[] = useMemo(() => {
    return communityDiariesData?.pages
      ? communityDiariesData?.pages.flat().filter((communityDiary) => communityDiary !== undefined)
      : [];
  }, [communityDiariesData]);

  const handleFetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return { communityDiaries, refetch, handleFetchNextPage, isLoading, isError };
}

export default useCommunityDiaries;
