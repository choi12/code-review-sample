import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import { UserDTO } from '@/api/auth/types';
import { TOAST_BOTTOM_OFFSET } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';
import usePrefetchFlowerpot from '@/hooks/prefetch/usePrefetchFlowerpot';
import useLoading from '@/hooks/store/useLoading';
import useErrorToast from '@/hooks/ui/feedback/useErrorToast';
import { useStore } from '@/store';
import { UnauthorizedError } from '@/types/errors';
import { getFCMToken } from '@/utils/notifications/messagingToken';
import { setAccessToken } from '@/utils/storage/auth';
import { getUseLock } from '@/utils/storage/lock';
import { APISignIn, APISignInParams } from '@/api/auth/APIsignIn';
import { SignInParams } from '@/types/auth';

function useSignInHelpers() {
  const navigation = useScreenNavigation();

  const saveUser = useStore((state) => state.saveUser);
  const prefetchFlowerpot = usePrefetchFlowerpot();

  const { hideLoading } = useLoading();
  const handleErrorWithToast = useErrorToast();

  const completeSignIn = useCallback(
    async (userData: UserDTO) => {
      saveUser({ ...userData, image: userData.image ?? '' });
      setAccessToken(userData.token);

      const lockEnabled = getUseLock();
      if (lockEnabled) {
        navigation.replace('LockScreen', { isBackground: false });
      } else {
        await prefetchFlowerpot();
        navigation.replace('BottomTab', { screen: 'MyFlowerpot' });
      }

      hideLoading();
    },
    [navigation, saveUser, prefetchFlowerpot, hideLoading],
  );

  const { mutateAsync: signInMutation } = useMutation({
    mutationFn: async (uid: string) => {
      const fcmToken = await getFCMToken();
      const data: APISignInParams = {
        userId: uid,
        fcmToken: fcmToken,
      };
      return APISignIn(data);
    },
  });

  const signInWithAPI = useCallback(
    async ({ uid, email, type }: SignInParams) => {
      try {
        const response = await signInMutation(uid);
        completeSignIn(response);
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          hideLoading();
          navigation.navigate('CreateProfile', { type, email, uid });
          return;
        }

        hideLoading();
        handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
      }
    },
    [signInMutation, completeSignIn, handleErrorWithToast, navigation, hideLoading],
  );

  return {
    completeSignIn,
    signInWithAPI,
  };
}

export default useSignInHelpers;
