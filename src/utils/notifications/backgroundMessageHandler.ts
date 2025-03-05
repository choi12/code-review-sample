import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import { reportError } from '../error/reportError';

import { displayNotification } from './displayNotification';

export const backgroundMessageHandler = async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
  try {
    await displayNotification(remoteMessage);
  } catch (error) {
    reportError(error);
  }
};
