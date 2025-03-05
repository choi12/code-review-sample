import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '@/constants';

import { MyDiaryTab } from '../..';

import CreateDiaryButton from './components/CreateDiaryButton';
import ListTypeButtonBox from './components/ListTypeButtonBox';

interface MyDiaryHeaderProps {
  selectedTab: MyDiaryTab;
  onSetTab: (tab: MyDiaryTab) => void;
  isScrolled: boolean;
}

function MyDiaryHeader({ selectedTab, onSetTab, isScrolled }: MyDiaryHeaderProps) {
  const { top: safeAreaTopInset } = useSafeAreaInsets();

  const animatedStatusBarStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(isScrolled ? COLORS.GRAYSCALE.WHITE : COLORS.CORE.BACKGROUND),
    }),
    [isScrolled],
  );

  const animatedButtonBoxStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(isScrolled ? COLORS.GRAYSCALE.WHITE : COLORS.CORE.BACKGROUND),
    }),
    [isScrolled],
  );

  return (
    <>
      <Animated.View style={[styles.statusBar, { height: safeAreaTopInset }, animatedStatusBarStyle]} />
      <Animated.View style={[styles.createDiaryButtonBox, animatedButtonBoxStyle]}>
        <ListTypeButtonBox selectedTab={selectedTab} onSetTab={onSetTab} />
        <CreateDiaryButton />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({});

export default MyDiaryHeader;
