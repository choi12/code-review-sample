import 'core-js/stable/atob';
import appleAuth, { AppleRequestResponse, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useMutation } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { useCallback } from 'react';
import Config from 'react-native-config';

import { APIAutoSignIn, APIAutoSignInParams } from '@/api/auth/APIAutoSignIn';
import { APISignIn, APISignInParams } from '@/api/auth/APISignIn';
import { UserDTO } from '@/api/auth/types';
import { GOOGLE_CLIENT_ID, TOAST_BOTTOM_OFFSET } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';
import usePrefetchFlowerpot from '@/hooks/prefetch/usePrefetchFlowerpot';
import useLoading from '@/hooks/store/useLoading';
import useErrorToast from '@/hooks/ui/feedback/useErrorToast';
import { useStore } from '@/store';
import { SignInParams, SignInType } from '@/types/auth';
import { UnauthorizedError } from '@/types/errors';
import { reportError } from '@/utils/error/reportError';
import { getFCMToken } from '@/utils/notifications/messagingToken';
import { getAccessToken, setAccessToken } from '@/utils/storage/auth';
import { getUseLock } from '@/utils/storage/lock';

import { isCancelledError } from '../utils/isCancelledError';

interface ExtendedAppleResponse extends AppleRequestResponse {
  sub: string; // Apple의 고유 사용자 ID
}

function useSignIn() {
  const navigation = useScreenNavigation();

  const saveUser = useStore((state) => state.saveUser);
  const prefetchFlowerpot = usePrefetchFlowerpot();

  const { showLoading, hideLoading } = useLoading();
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

  const signIn = useCallback(
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

  const signInWithGoogle = useCallback(async () => {
    try {
      showLoading();

      GoogleSignin.configure({
        webClientId: GOOGLE_CLIENT_ID,
        scopes: ['email'],
      });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const res = await auth().signInWithCredential(googleCredential);

      await signIn({
        uid: res.user.uid,
        email: res.user.email ?? 'Google',
        type: 'google',
      });
    } catch (error) {
      hideLoading();
      if (isCancelledError(error)) return;

      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [signIn, showLoading, hideLoading, handleErrorWithToast]);

  const signInWithApple = useCallback(async () => {
    try {
      showLoading();

      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });
      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('failed to get identity token');
      }

      await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      const res = jwtDecode(appleAuthRequestResponse.identityToken) as ExtendedAppleResponse;
      await signIn({
        uid: res.sub,
        email: res.email ?? 'Apple',
        type: 'apple',
      });
    } catch (error) {
      hideLoading();
      if (isCancelledError(error)) return;

      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [signIn, showLoading, hideLoading, handleErrorWithToast]);

  const signInWithAppleForAndroid = useCallback(async () => {
    try {
      showLoading();

      appleAuthAndroid.configure({
        clientId: Config.APPLE_CLIENT_ID_ANDROID,
        redirectUri: Config.APPLE_REDIRECT_URI,
        responseType: appleAuthAndroid.ResponseType.ALL,
        scope: appleAuthAndroid.Scope.ALL,
      });

      const response = await appleAuthAndroid.signIn();
      if (!response?.id_token) {
        throw new Error('failed to get id_token');
      }

      const res = jwtDecode(response.id_token) as ExtendedAppleResponse;
      await signIn({
        uid: res.sub,
        email: res.email ?? 'Apple',
        type: 'apple',
      });
    } catch (error) {
      hideLoading();
      if (isCancelledError(error)) return;

      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [signIn, showLoading, hideLoading, handleErrorWithToast]);

  const handleSignIn = useCallback(
    (type: SignInType) => {
      if (type === 'google') {
        signInWithGoogle();
        return;
      }
      if (type === 'apple') {
        if (appleAuth.isSupported) {
          signInWithApple();
          return;
        }
        signInWithAppleForAndroid();
      }
    },
    [signInWithApple, signInWithGoogle, signInWithAppleForAndroid],
  );

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
    handleSignIn,
    autoSignIn,
  };
}

export default useSignIn;
