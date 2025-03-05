import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Lemony1Flowerpot, Lemony1Seed } from '@/assets/images';

import useLemonySeedAnimation from './hooks/useLemonySeedAnimation';

function FirstLemony() {
  const { animatedLemonySeedStyle } = useLemonySeedAnimation();

  return (
    <Animated.View entering={FadeIn.duration(300)} style={[styles.seedLemonyBox]}>
      <FastImage
        source={Lemony1Flowerpot}
        style={styles.seedFlowerpotImage}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Animated.View style={[styles.seedLemonyImageBox, animatedLemonySeedStyle]}>
        <FastImage source={Lemony1Seed} style={styles.seedLemonyImage} resizeMode={FastImage.resizeMode.contain} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

export default FirstLemony;
