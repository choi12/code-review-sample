import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useCallback } from 'react';

import { GOOGLE_CLIENT_ID, TOAST_BOTTOM_OFFSET } from '@/constants';
import useLoading from '@/hooks/store/useLoading';
import useErrorToast from '@/hooks/ui/feedback/useErrorToast';
import useSignInHelpers from './useSignInHelpers';
import { isCancelledError } from '../utils/isCancelledError';

function useGoogleSignIn() {
  const { signInWithAPI } = useSignInHelpers();

  const { showLoading, hideLoading } = useLoading();
  const handleErrorWithToast = useErrorToast();

  const signInWithGoogle = useCallback(async () => {
    try {
      showLoading();

      GoogleSignin.configure({ webClientId: GOOGLE_CLIENT_ID, scopes: ['email'] });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const res = await auth().signInWithCredential(googleCredential);

      await signInWithAPI({ uid: res.user.uid, email: res.user.email ?? 'Google', type: 'google' });
    } catch (error) {
      hideLoading();
      if (isCancelledError(error)) return;

      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [signInWithAPI, showLoading, hideLoading, handleErrorWithToast]);

  return {
    signInWithGoogle,
  };
}

export default useGoogleSignIn;
