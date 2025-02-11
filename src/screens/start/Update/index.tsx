import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { Logo } from '@/assets/images';
import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LAYOUT, TEXT } from '@/constants';

import useAppUpdate from './hooks/useAppUpdate';

function Update() {
  const { syncProgress } = useAppUpdate();
  const hasSyncProgress = !!syncProgress;

  const animatedProgressStyle = useAnimatedStyle(
    () => ({
      flex: withTiming(hasSyncProgress ? syncProgress.receivedBytes / syncProgress.totalBytes : 0),
    }),
    [syncProgress],
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <FastImage source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.notiBox}>
        <VectorIcon type="Feather" name="alert-circle" size={15} color={COLORS.CORE.MAIN} />
        <Text style={styles.notiText}>{hasSyncProgress ? TEXT.UPDATE.IN_PROGRESS : TEXT.UPDATE.CHECKING_VERSION}</Text>
      </View>
      <View style={[styles.track, !hasSyncProgress && styles.transparentTrack]}>
        <Animated.View style={[styles.bar, animatedProgressStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Update;
