import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Lemony3New } from '@/assets/images';
import { LottieHeart } from '@/assets/lottie';

function ThirdLemony() {
  return (
    <Animated.View entering={FadeIn.duration(300)} style={[styles.lemonyImageBox]}>
      <LottieView source={LottieHeart} autoPlay style={styles.heartLottie} />
      <FastImage source={Lemony3New} style={styles.lemonyImage} resizeMode={FastImage.resizeMode.contain} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

export default ThirdLemony;
