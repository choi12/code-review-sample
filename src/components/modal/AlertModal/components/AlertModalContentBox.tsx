import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Logo } from '@/assets/images';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import { useStore } from '@/store';

function AlertModalContentBox() {
  const modalContent = useStore((state) => state.alert.content);

  return (
    <View style={styles.topBox}>
      <View style={styles.titleBox}>
        <FastImage source={Logo} style={styles.logoImage} resizeMode={FastImage.resizeMode.contain} />
      </View>
      {modalContent?.image && modalContent.image}
      <Text style={modalContent?.image ? styles.contentTextWithImage : styles.contentText}>
        {modalContent?.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AlertModalContentBox;
