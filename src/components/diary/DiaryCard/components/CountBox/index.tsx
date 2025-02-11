import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

import { COUNTBOX_ICONS } from './data';
import { CountType } from './types';

interface CountBoxProps {
  type: CountType;
  count: string | number;
}

function CountBox({ type, count }: CountBoxProps) {
  return (
    <View style={styles.countBox}>
      {COUNTBOX_ICONS[type]}
      <Text style={styles.countText}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CountBox;
