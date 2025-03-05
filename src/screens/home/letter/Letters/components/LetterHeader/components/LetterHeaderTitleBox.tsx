import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Letter } from '@/assets/images';
import Text from '@/components/common/Text';
import { COLORS, FONTS } from '@/constants';

function LetterHeaderTitleBox() {
  return (
    <View style={styles.headerTitleBox}>
      <Text style={styles.headerText}>나에게 쓰는 편지</Text>
      <FastImage source={Letter} style={styles.headerIcon} resizeMode={FastImage.resizeMode.contain} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default LetterHeaderTitleBox;
