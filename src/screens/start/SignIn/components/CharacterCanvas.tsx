import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { LemonyMain, Logo, Sun, Watering } from '@/assets/images';

function CharacterCanvas() {
  return (
    <View style={styles.topBox}>
      <FastImage source={Logo} style={styles.logoImage} resizeMode={FastImage.resizeMode.contain} />
      <FastImage source={LemonyMain} style={styles.flowerpotImage} resizeMode={FastImage.resizeMode.contain} />
      <FastImage source={Sun} style={styles.sunImage} resizeMode={FastImage.resizeMode.contain} />
      <FastImage source={Watering} style={styles.wateringImage} resizeMode={FastImage.resizeMode.contain} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default CharacterCanvas;
