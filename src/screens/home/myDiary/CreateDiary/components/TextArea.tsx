import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS, LAYOUT, FONTS, TEXT } from '@/constants';

import { DiaryStateUpdater } from '../types';

interface TextAreaProps {
  text: string;
  onSetDiaryState: DiaryStateUpdater;
}

function TextArea({ text, onSetDiaryState }: TextAreaProps) {
  return (
    <View style={styles.textInputBox}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(value) => onSetDiaryState({ text: value })}
        multiline
        placeholder={TEXT.PLACEHOLDER.DIARY}
        placeholderTextColor={COLORS.GRAYSCALE.LIGHT_GRAY}
      />
      <Text style={styles.countText}>{text.length} 글자 작성했어요.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TextArea;
