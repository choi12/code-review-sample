import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS, FONTS, LAYOUT, NICKNAME_MAX_LENGTH, TEXT } from '@/constants';
import { useProfileContext } from '@/context/profile/ProfileContext';

import NotiBox from './NotiBox';

function NicknameSection() {
  const { nickname, onSetNickname } = useProfileContext();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.inputTitleText}>닉네임</Text>
        <TextInput
          value={nickname}
          onChangeText={onSetNickname}
          style={styles.textInput}
          placeholder={TEXT.PLACEHOLDER.NICKNAME}
          maxLength={NICKNAME_MAX_LENGTH}
          placeholderTextColor={COLORS.GRAYSCALE.LIGHT_GRAY}
        />
      </View>
      <NotiBox />
    </View>
  );
}

const styles = StyleSheet.create({});

export default NicknameSection;
