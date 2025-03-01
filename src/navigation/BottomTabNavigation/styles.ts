import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Platform, ViewStyle } from 'react-native';

import { COLORS, FONTS, LAYOUT } from '@/constants';

export const tabBarOptionStyle: BottomTabNavigationOptions = {};

const shadowStyle = Platform.select({});

export const tabBarStyle: ViewStyle = {};

export const TAB_BAR_LAYOUT = {} as const;
