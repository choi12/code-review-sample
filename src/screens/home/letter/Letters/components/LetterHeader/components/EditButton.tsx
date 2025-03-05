import React from 'react';
import { StyleSheet } from 'react-native';

import AnimatedPressable from '@/components/common/AnimatedPressable';
import Text from '@/components/common/Text';
import { COLORS, LAYOUT } from '@/constants';

interface EditButtonProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

function EditButton({ isEditMode, onToggleEditMode }: EditButtonProps) {
  return (
    <AnimatedPressable onPress={onToggleEditMode} pressedOpacity={0.8} pressedScale={0.97} style={styles.button}>
      <Text style={[styles.buttonText, isEditMode && { color: COLORS.ACCENT.ORANGE }]}>
        {!isEditMode ? '편집' : '편집 취소'}
      </Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({});

export default EditButton;
