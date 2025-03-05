import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS, MESSAGE } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';

import AnimatedPressable from '../AnimatedPressable';
import Text from '../Text';
import VectorIcon from '../VectorIcon';

interface ErrorViewProps {
  reload?: () => void;
}

function ErrorView({ reload }: ErrorViewProps) {
  const navigation = useScreenNavigation();

  const handleRetry = async () => {
    if (reload) {
      reload();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <View style={styles.textBox}>
        <VectorIcon type="Feather" name="alert-circle" size={14} color={COLORS.ACCENT.ORANGE} />
        <Text style={styles.text}>{MESSAGE.SYSTEM.TRY_AGAIN}</Text>
      </View>
      <AnimatedPressable onPress={handleRetry} style={styles.button}>
        <Text style={styles.buttonText}>{reload ? '다시 시도' : '돌아가기'}</Text>
      </AnimatedPressable>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ErrorView;
