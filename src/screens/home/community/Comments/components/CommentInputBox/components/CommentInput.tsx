import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { COLORS, COMMENT_MAX_LENGTH, FONTS, LAYOUT, TEXT } from '@/constants';

interface CommentInputProps {
  text: string;
  onSetText: (text: string) => void;
}

function CommentInput({ text, onSetText }: CommentInputProps) {
  return (
    <TextInput
      style={styles.textInput}
      value={text}
      onChangeText={onSetText}
      placeholder={TEXT.PLACEHOLDER.COMMENT}
      placeholderTextColor={COLORS.GRAYSCALE.LIGHT_GRAY}
      maxLength={COMMENT_MAX_LENGTH}
      multiline
    />
  );
}

const styles = StyleSheet.create({});

export default CommentInput;
