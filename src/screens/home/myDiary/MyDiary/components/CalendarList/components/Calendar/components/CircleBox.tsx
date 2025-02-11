import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants';

const CIRCLE_ARRAY = Array(10).fill(null);

function CircleBox() {
  return (
    <View style={styles.circleBox}>
      {CIRCLE_ARRAY.map((_, index) => (
        <View key={index} style={styles.circle} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default CircleBox;
