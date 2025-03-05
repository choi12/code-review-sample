import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import AnimatedPressable from '@/components/common/AnimatedPressable';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';

interface DeleteButtonProps {
  onPress: () => void;
}

function DeleteButton({ onPress }: DeleteButtonProps) {
  return (
    <Animated.View entering={FadeIn}>
      <AnimatedPressable onPress={onPress} style={styles.button}>
        <VectorIcon type="Entypo" name="minus" color={COLORS.GRAYSCALE.BLACK} size={17} />
      </AnimatedPressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

export default DeleteButton;
