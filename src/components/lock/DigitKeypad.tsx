import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LOCK_SCREEN_DIGITS } from '@/constants';

interface DigitKeypadProps {
  onDigitPress: (digit: string) => void;
  onClear: () => void;
}

function DigitKeypad({ onDigitPress, onClear }: DigitKeypadProps) {
  return (
    <>
      {LOCK_SCREEN_DIGITS.map((digitRow, rowIndex) => (
        <View key={rowIndex} style={styles.rowWrapper}>
          {digitRow.map((digit, columnIndex) => (
            <TouchableOpacity
              key={`${rowIndex}-${columnIndex}`}
              onPress={() => onDigitPress(digit!)}
              disabled={digit === null}
              style={styles.numberButtonBox}
            >
              <Text style={styles.numberButtonText}>{digit ?? ''}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity onPress={onClear} style={[styles.numberButtonBox, styles.clearButton]}>
        <VectorIcon type="Feather" name="delete" color={COLORS.GRAYSCALE.LIGHT_BLACK} size={25} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});

export default DigitKeypad;
