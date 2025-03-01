import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

import { useDiaryCardContext } from '../../context/DiaryCardContext';

import { SIZE_PRESET } from './styles';

function Content() {
  const { diary, size } = useDiaryCardContext();
  const preset = SIZE_PRESET[size];

  return (
    <View style={[styles.container, preset.container]}>
      <Text
        numberOfLines={preset.text.numberOfLines}
        ellipsizeMode="tail"
        style={[styles.text, { marginVertical: preset.text.marginVertical }]}
      >
        {diary.text}
      </Text>
      {diary.image && (
        <FastImage source={{ uri: diary.image }} style={preset.image} resizeMode={FastImage.resizeMode.cover} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

export default Content;
