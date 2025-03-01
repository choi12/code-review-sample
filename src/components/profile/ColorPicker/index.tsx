import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';

import { PICKER_COLORS } from './data';

interface ColorPickerProps {
  onSetBackground: (background?: string) => void;
}

function ColorPicker({ onSetBackground }: ColorPickerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <VectorIcon type="MaterialIcons" name="colorize" size={15} color={COLORS.GRAYSCALE.LIGHT_BLACK} />
        <Text style={styles.titleText}>배경색을 선택해 주세요.</Text>
      </View>
      {PICKER_COLORS.map((colorRow, colorRowIndex) => (
        <View key={colorRowIndex} style={styles.pickerBox}>
          {colorRow.map((color) => (
            <TouchableOpacity
              key={color}
              onPress={() => onSetBackground(color)}
              style={[styles.button, { backgroundColor: color }]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorPicker;
