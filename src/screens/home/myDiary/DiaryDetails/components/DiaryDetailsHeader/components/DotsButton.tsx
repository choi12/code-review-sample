import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';

interface DotsButtonProps {
  onPress: () => void;
}

function DotsButton({ onPress }: DotsButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <VectorIcon type="Entypo" name="dots-three-horizontal" size={18} color={COLORS.GRAYSCALE.LIGHT_BLACK} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default DotsButton;
