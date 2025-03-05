import React from 'react';
import { StyleSheet, Text as BaseText, TextProps } from 'react-native';

import { FONTS } from '@/constants';

function Text({ style, ...otherProps }: TextProps) {
  return <BaseText {...otherProps} style={[styles.text, style]} />;
}

const styles = StyleSheet.create({});

export default Text;
