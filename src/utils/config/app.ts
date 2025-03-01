import { StatusBar } from 'react-native';
import { requestNotifications } from 'react-native-permissions';
import SplashScreen from 'react-native-splash-screen';

import { COLORS, isAndroid } from '@/constants';

import { delay } from '../common/delay';

const hideSplash = async () => {
  await delay(1500);
  SplashScreen.hide();
};

const setStatusBar = () => {
  StatusBar.setBarStyle('dark-content');
  // iOS는 기본적으로 투명한 상태바를 사용
  if (isAndroid) {
    StatusBar.setBackgroundColor(COLORS.GRAYSCALE.WHITE);
  }
};

export const setupInitialAppConfig = async () => {
  await hideSplash();
  setStatusBar();
  await requestNotifications(['alert', 'badge', 'sound']);
};
