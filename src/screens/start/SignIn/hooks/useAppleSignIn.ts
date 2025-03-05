import 'core-js/stable/atob';
import appleAuth, { AppleRequestResponse, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { jwtDecode } from 'jwt-decode';
import { useCallback } from 'react';
import Config from 'react-native-config';

import { TOAST_BOTTOM_OFFSET } from '@/constants';
import useLoading from '@/hooks/store/useLoading';
import useErrorToast from '@/hooks/ui/feedback/useErrorToast';
import useSignInHelpers from './useSignInHelpers';
import { isCancelledError } from '../utils/isCancelledError';

interface ExtendedAppleResponse extends AppleRequestResponse {
  sub: string; // Apple의 고유 사용자 ID
}

function useAppleSignIn() {
  const { signInWithAPI } = useSignInHelpers();

  const { showLoading, hideLoading } = useLoading();
  const handleErrorWithToast = useErrorToast();

  const signInWithAppleIOS = useCallback(async () => {
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
      await signInWithAPI({ uid: res.sub, email: res.email ?? 'Apple', type: 'apple' });
    } catch (error) {
      hideLoading();
      if (isCancelledError(error)) return;

      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [signInWithAPI, showLoading, hideLoading, handleErrorWithToast]);

  const signInWithAppleAndroid = useCallback(async () => {
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
      await signInWithAPI({ uid: res.sub, email: res.email ?? 'Apple', type: 'apple' });
    } catch (error) {
      hideLoading();
      if (isCancelledError(error)) return;

      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [signInWithAPI, showLoading, hideLoading, handleErrorWithToast]);

  const signInWithApple = useCallback(() => {
    if (appleAuth.isSupported) {
      signInWithAppleIOS();
      return;
    }
    signInWithAppleAndroid();
  }, [signInWithAppleIOS, signInWithAppleAndroid]);

  return {
    signInWithApple,
  };
}

export default useAppleSignIn;
