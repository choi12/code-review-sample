import LottieView, { LottieViewProps } from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { LottieHeart, LottieRain } from '@/assets/lottie';
import { PlantAction } from '@/screens/home/myFlowerpot/Mission/hooks/useCompleteMission';

interface LottieBoxProps {
  type: PlantAction;
}

const ACTION_LOTTIE: Record<PlantAction, LottieViewProps['source']> = {
  watering: LottieRain,
  love: LottieHeart,
};

function LottieBox({ type }: LottieBoxProps) {
  return (
    <Animated.View style={styles.animatedView} entering={FadeIn} exiting={FadeOut}>
      <LottieView source={ACTION_LOTTIE[type]} autoPlay style={styles.lottie} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

export default LottieBox;
