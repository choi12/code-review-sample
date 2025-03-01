import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '@/constants';

import useAnimatedStyles from '../../hooks/useAnimatedStyles';

import SortButton from './components/SortButton';

function AnimatedHeader() {
  const { top: safeAreaTopInset } = useSafeAreaInsets();
  const { animatedStatusBoxStyle, animatedButtonBoxStyle } = useAnimatedStyles();

  return (
    <>
      <Animated.View style={[styles.statusBox, { height: safeAreaTopInset }, animatedStatusBoxStyle]} />
      <Animated.View style={[styles.buttonBox, animatedButtonBoxStyle]}>
        <SortButton />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({});

export default AnimatedHeader;
