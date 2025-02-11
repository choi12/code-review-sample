import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Lemony3PreviewGrayscale } from '@/assets/images';
import { COLORS } from '@/constants';

import Text from './Text';

interface EmptyStateViewProps {
  message: string;
}

function EmptyStateView({ message }: EmptyStateViewProps) {
  const { height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        { height: height / 1.5 }, // 컨텐츠의 수직 위치를 화면 정중앙보다 살짝 위로 배치
      ]}
    >
      <FastImage source={Lemony3PreviewGrayscale} style={styles.image} resizeMode={FastImage.resizeMode.contain} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default EmptyStateView;
