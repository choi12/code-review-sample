import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS, FONTS, LAYOUT, LETTER_MAX_LENGTH, TEXT } from '@/constants';

interface LetterInputProps {
  text: string;
  onSetText: (text: string) => void;
}

function LetterInput({ text, onSetText }: LetterInputProps) {
  const inputRef = useRef<TextInput>(null);

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => clearTimeout(timer);
    }, []),
  );

  return (
    <View style={styles.textInputBox}>
      <TextInput
        ref={inputRef}
        onChangeText={onSetText}
        style={styles.textInput}
        multiline
        placeholder={TEXT.PLACEHOLDER.LETTER}
        placeholderTextColor={COLORS.GRAYSCALE.LIGHT_GRAY}
        maxLength={LETTER_MAX_LENGTH}
      />
      <Text style={styles.countText}>
        {text.length} / 최대 {LETTER_MAX_LENGTH}자
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LetterInput;
