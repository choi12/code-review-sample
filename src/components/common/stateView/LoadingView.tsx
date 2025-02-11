import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants';

function LoadingView() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.box]}>
      <ActivityIndicator color={COLORS.GRAYSCALE.LIGHT_GRAY} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default LoadingView;
