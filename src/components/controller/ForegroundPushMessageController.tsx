import notifee, { Event, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import React, { PropsWithChildren, useCallback, useEffect } from 'react';

import useUserInfo from '@/hooks/store/useUserInfo';
import { reportError } from '@/utils/error/reportError';
import { displayNotification } from '@/utils/notifications/displayNotification';
import { moveToComments } from '@/utils/notifications/pushNavigation';

function ForegroundPushMessageController({ children }: PropsWithChildren) {
  const userNickname = useUserInfo('nickname');

  const navigateToComments = useCallback(
    ({ type, detail }: Event) => {
      if (type !== EventType.PRESS) return;
      if (!detail.notification?.data?.diaryIdx || !userNickname) return;

      const diaryIdx = detail.notification.data.diaryIdx;
      moveToComments(userNickname, Number(diaryIdx));
    },
    [userNickname],
  );

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      try {
        await displayNotification(remoteMessage);
      } catch (error) {
        reportError(error);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent((event) => {
      try {
        navigateToComments(event);
      } catch (error) {
        reportError(error);
      }
    });
    return () => unsubscribe();
  }, [navigateToComments]);

  return <>{children}</>;
}

export default ForegroundPushMessageController;
