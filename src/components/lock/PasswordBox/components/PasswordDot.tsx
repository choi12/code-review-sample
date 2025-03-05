import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Lemony3Preview, Lemony3PreviewGrayscale } from '@/assets/images';

interface PasswordDotProps {
  isGrayscale?: boolean;
  opacity?: 1 | 0;
}

function PasswordDot({ isGrayscale = false, opacity = 1 }: PasswordDotProps) {
  return (
    <FastImage
      source={isGrayscale ? Lemony3PreviewGrayscale : Lemony3Preview}
      style={[styles.passwordImage, { opacity }]}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

const styles = StyleSheet.create({});

export default PasswordDot;
