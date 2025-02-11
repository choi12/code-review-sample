import messaging from '@react-native-firebase/messaging';

export const getFCMToken = async (): Promise<string> => {
  const fcmToken = await messaging().getToken();
  return fcmToken;
};

export const deleteMessagingToken = async (): Promise<void> => {
  await messaging().deleteToken();
};
