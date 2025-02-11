import messaging from '@react-native-firebase/messaging';
import { extend, locale } from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { AppRegistry, Platform, Text, TextInput } from 'react-native';
import 'dayjs/locale/ko';

import { backgroundMessageHandler } from '@/utils/notifications/backgroundMessageHandler';

import { name as appName } from './app.json';
import App from './src/App';

locale('ko');
extend(isSameOrBefore);

// Android는 별도의 백그라운드 핸들러가 필요
if (Platform.OS === 'android') {
  messaging().setBackgroundMessageHandler(backgroundMessageHandler);
}

Text.defaultProps = {
  ...Text.defaultProps,
  allowFontScaling: false,
  includeFontPadding: false, // Android
};
TextInput.defaultProps = {
  ...TextInput.defaultProps,
  allowFontScaling: false,
};

AppRegistry.registerComponent(appName, () => App);
