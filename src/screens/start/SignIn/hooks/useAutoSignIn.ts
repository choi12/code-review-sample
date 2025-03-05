import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import { APIAutoSignIn, APIAutoSignInParams } from '@/api/auth/APIAutoSignIn';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';
import { reportError } from '@/utils/error/reportError';
import { getAccessToken } from '@/utils/storage/auth';
import useSignInHelpers from './useSignInHelpers';

function useAutoSignIn() {
  const navigation = useScreenNavigation();
  const { completeSignIn } = useSignInHelpers();

  const { mutateAsync: autoSignInMutation } = useMutation({
    mutationFn: async (token: string) => {
      const data: APIAutoSignInParams = {
        accessToken: token,
      };
      return APIAutoSignIn(data);
    },
  });

  const autoSignIn = useCallback(async () => {
    try {
      const token = getAccessToken();
      if (!token) {
        navigation.replace('SignIn');
        return;
      }
      const response = await autoSignInMutation(token);
      completeSignIn(response);
    } catch (error) {
      reportError(error);
      navigation.replace('SignIn');
    }
  }, [autoSignInMutation, completeSignIn, navigation]);

  return {
    autoSignIn,
  };
}

export default useAutoSignIn;
