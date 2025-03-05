import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Lemony2Preview, Lemony3Preview } from '@/assets/images';
import { COLORS } from '@/constants';
import useFlowerpotStats from '@/screens/home/myFlowerpot/MyFlowerpot/hooks/useFlowerpotStats';

function ProgressBarCircle() {
  const { level, isMaxLevel } = useFlowerpotStats();

  return (
    <View style={[styles.progressBarCircle, shadowStyle]}>
      {isMaxLevel ? (
        <Text style={styles.maxText}>Max</Text>
      ) : (
        <FastImage
          source={level === 1 ? Lemony2Preview : Lemony3Preview}
          style={styles.progressBarCircleImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
    </View>
  );
}

const shadowStyle = Platform.select({
  android: {
    elevation: 3,
  },
  ios: {
    shadowColor: COLORS.GRAYSCALE.GRAY,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

const styles = StyleSheet.create({});

export default ProgressBarCircle;
