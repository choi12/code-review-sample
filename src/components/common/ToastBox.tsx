import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import VisibilityController from '@/components/controller/VisibilityController';
import { COLORS } from '@/constants';
import useToastBox from '@/hooks/ui/feedback/useToastBox';

import Text from './Text';
import VectorIcon from './VectorIcon';

function ToastBox() {
  const { isVisible, toastPosition, message } = useToastBox();

  return (
    <VisibilityController isVisible={isVisible}>
      <Animated.View style={[styles.container, { bottom: toastPosition }]}>
        <VectorIcon type="Feather" name="alert-circle" size={15} color={COLORS.CORE.MAIN} />
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </VisibilityController>
  );
}

const styles = StyleSheet.create({});

export default ToastBox;
