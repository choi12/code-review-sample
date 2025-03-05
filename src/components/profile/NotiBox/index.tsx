import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from '@/components/common/Text';
import { useProfileContext } from '@/context/profile/ProfileContext';

import { NICKNAME_NOTI_PRESET } from './data';

function NotiBox() {
  const { notiType } = useProfileContext();

  if (!notiType) return null;

  return (
    <View style={styles.notiBox}>
      <FastImage
        source={NICKNAME_NOTI_PRESET[notiType].icon}
        style={styles.notiIcon}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[styles.notiText, { color: NICKNAME_NOTI_PRESET[notiType].color }]}>
        {NICKNAME_NOTI_PRESET[notiType].text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default NotiBox;
