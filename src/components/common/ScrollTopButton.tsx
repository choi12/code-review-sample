import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, isAndroid, LAYOUT } from '@/constants';

import VectorIcon from './VectorIcon';

interface ScrollTopButtonProps {
  onPress: () => void;
}

function ScrollTopButton({ onPress }: ScrollTopButtonProps) {
  const { bottom: safeAreaBottomInset } = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { bottom: isAndroid ? LAYOUT.BOTTOM_TAB_HEIGHT + 10 : LAYOUT.BOTTOM_TAB_HEIGHT + safeAreaBottomInset },
      ]}
    >
      <VectorIcon type="AntDesign" name="totop" size={25} color={COLORS.GRAYSCALE.LIGHT_GRAY} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default ScrollTopButton;
