import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Platform, ViewStyle } from 'react-native';

import { COLORS, FONTS, LAYOUT } from '@/constants';

export const tabBarOptionStyle: BottomTabNavigationOptions = {
  tabBarActiveTintColor: COLORS.CORE.MAIN,
  tabBarInactiveTintColor: COLORS.GRAYSCALE.LIGHT_GRAY,
  tabBarLabelStyle: {
    fontFamily: FONTS.DOVEMAYO,
    fontSize: 11,
    marginBottom: 5,
    letterSpacing: -0.5,
  },
};

const shadowStyle = Platform.select({
  android: {
    elevation: 1,
  } as const,
  ios: {
    shadowColor: COLORS.GRAYSCALE.LIGHT_GRAY,
    shadowOpacity: 0.3,
  } as const,
});

export const tabBarStyle: ViewStyle = {
  ...shadowStyle,
  height: LAYOUT.BOTTOM_TAB_HEIGHT,
  borderTopWidth: 0,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingBottom: 10,
  paddingHorizontal: LAYOUT.PADDING,
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: COLORS.GRAYSCALE.WHITE,
};

export const TAB_BAR_LAYOUT = {
  SAFE_AREA_PADDING: 20,
  BOTTOM_PADDING: 10,
  SAFE_AREA_BOTTOM_ADJUSTMENT: 3,
} as const;
