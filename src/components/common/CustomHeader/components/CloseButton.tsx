import React from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { COLORS, LAYOUT } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';

import VectorIcon from '../../VectorIcon';

function CloseButton({ style, ...otherProps }: PressableProps) {
  const navigation = useScreenNavigation();

  return (
    <Pressable onPress={navigation.goBack} {...otherProps} style={[styles.button, style] as StyleProp<ViewStyle>}>
      <VectorIcon type="Ionicons" name="close" size={28} color={COLORS.GRAYSCALE.BLACK} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default CloseButton;
