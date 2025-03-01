import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { GOOGLE_CLIENT_ID } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';
import useUserInfo from '@/hooks/store/useUserInfo';
import { useStore } from '@/store';
import { deleteMessagingToken } from '@/utils/notifications/messagingToken';
import { storage } from '@/utils/storage/storage';

function useAuthCleanup() {
  const navigation = useScreenNavigation();
  const queryClient = useQueryClient();

  const removeUser = useStore((state) => state.removeUser);
  const type = useUserInfo('type');

  const clearGoogleSignIn = useCallback(async () => {
    GoogleSignin.configure({ webClientId: GOOGLE_CLIENT_ID });
    await GoogleSignin.signOut();
  }, []);

  const cleanupUserData = useCallback(async () => {
    if (type === 'google') {
      await clearGoogleSignIn();
    }
    await deleteMessagingToken();

    storage.clear();
    queryClient.clear();

    navigation.reset({ routes: [{ name: 'SignIn' }] });
    removeUser();
  }, [navigation, removeUser, clearGoogleSignIn, type, queryClient]);

  return { cleanupUserData };
}

export default useAuthCleanup;
