import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Lemony3PreviewGrayscale } from '@/assets/images';

function BackgroundImage() {
  return (
    <FastImage
      source={Lemony3PreviewGrayscale}
      style={styles.backgroundImage}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

const styles = StyleSheet.create({});

export default BackgroundImage;
