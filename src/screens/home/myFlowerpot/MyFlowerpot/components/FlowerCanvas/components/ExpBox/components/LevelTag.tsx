import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { LevelBox } from '@/assets/images';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import useFlowerpotStats from '@/screens/home/myFlowerpot/MyFlowerpot/hooks/useFlowerpotStats';

function LevelTag() {
  const { level, isMaxLevel } = useFlowerpotStats();

  return (
    <View style={styles.levelBox}>
      <FastImage source={LevelBox} style={styles.levelBoxImage} resizeMode={FastImage.resizeMode.contain} />
      <Text style={[styles.levelText, isMaxLevel && styles.maxLevelText]}>Lv.{!isMaxLevel ? level : ' Max'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LevelTag;
