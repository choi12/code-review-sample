import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LAYOUT } from '@/constants';

interface BackgroundSelectorProps {
  background?: string;
  onOpenColorPicker: () => void;
}

function BackgroundSelector({ background, onOpenColorPicker }: BackgroundSelectorProps) {
  return (
    <View style={styles.rowBox}>
      <View style={styles.titleBox}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="format-color-fill"
          size={15}
          color={COLORS.GRAYSCALE.LIGHT_BLACK}
        />
        <Text style={styles.title}>배경</Text>
      </View>
      <Pressable
        onPress={onOpenColorPicker}
        style={[styles.colorPickerButton, { backgroundColor: background ?? COLORS.GRAYSCALE.WHITE }]}
      >
        {!background && (
          <VectorIcon type="MaterialIcons" name="colorize" size={15} color={COLORS.GRAYSCALE.LIGHT_BLACK} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});

export default BackgroundSelector;
