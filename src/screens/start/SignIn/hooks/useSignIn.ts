import { useCallback } from 'react';

import { SignInType } from '@/types/auth';
import useGoogleSignIn from './useGoogleSignIn';
import useAppleSignIn from './useAppleSignIn';
import useAutoSignIn from './useAutoSignIn';

// 메인 로그인 훅 - 다양한 로그인 방식 통합 관리
function useSignIn() {
  const { signInWithGoogle } = useGoogleSignIn();
  const { signInWithApple } = useAppleSignIn();
  const { autoSignIn } = useAutoSignIn();

  const handleSignIn = useCallback(
    (type: SignInType) => {
      if (type === 'google') {
        signInWithGoogle();
      } else if (type === 'apple') {
        signInWithApple();
      }
    },
    [signInWithGoogle, signInWithApple],
  );

  return {
    handleSignIn,
    autoSignIn,
  };
}

export default useSignIn;
