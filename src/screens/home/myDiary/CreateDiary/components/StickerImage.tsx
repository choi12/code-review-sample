import React from 'react';
import { StyleSheet, ImageRequireSource } from 'react-native';
import FastImage from 'react-native-fast-image';

import { STICKER_ICONS } from '../data';

interface StickerImageProps {
  name: string;
  size: number;
}

function StickerImage({ name, size }: StickerImageProps) {
  const stickerIndex = STICKER_ICONS.findIndex((icon) => icon.name === name);
  const stickerIcon: ImageRequireSource = STICKER_ICONS[stickerIndex].icon;

  return <FastImage source={stickerIcon} style={[styles.sticker, { width: size }]} />;
}

const styles = StyleSheet.create({});

export default StickerImage;
