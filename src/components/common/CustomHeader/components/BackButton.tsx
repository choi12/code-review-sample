import React from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { COLORS, LAYOUT } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';

import VectorIcon from '../../VectorIcon';

function BackButton({ style, ...otherProps }: PressableProps) {
  const navigation = useScreenNavigation();

  return (
    <Pressable onPress={navigation.goBack} {...otherProps} style={[styles.button, style] as StyleProp<ViewStyle>}>
      <VectorIcon type="Ionicons" name="arrow-back" size={25} color={COLORS.GRAYSCALE.BLACK} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default BackButton;
