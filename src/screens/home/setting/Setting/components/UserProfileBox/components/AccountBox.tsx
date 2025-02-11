import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Apple, Google } from '@/assets/images';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import useUserInfo from '@/hooks/store/useUserInfo';

function AccountBox() {
  const { type, account } = useUserInfo(['type', 'account']) ?? {};
  const isApple = type === 'apple' || type === undefined;

  return (
    <View style={styles.accountBox}>
      <Image
        source={isApple ? Apple : Google}
        style={[styles.accountImage, isApple && { tintColor: COLORS.GRAYSCALE.BLACK }]}
        resizeMode="contain"
      />
      <Text style={styles.accountText}>{account ?? ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AccountBox;
