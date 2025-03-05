import notifee, { AndroidImportance } from '@notifee/react-native';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

type PushPayload = { title: string; body: string; diaryIdx: string };

export const displayNotification = async (message: FirebaseMessagingTypes.RemoteMessage) => {
  if (!message.data?.notifee) return;

  const pushPayload = JSON.parse(message.data.notifee as string) as PushPayload;

  const channel = await notifee.createChannel({
    id: 'sample-app',
    name: 'sample-app',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: pushPayload.title,
    body: pushPayload.body,
    data: {
      diaryIdx: pushPayload.diaryIdx,
    },
    android: {
      channelId: channel,
      smallIcon: 'push_icon',
      pressAction: { id: 'default' },
    },
    ios: {
      critical: true, // 무음 모드에서도 알림 표시
    },
  });
};
