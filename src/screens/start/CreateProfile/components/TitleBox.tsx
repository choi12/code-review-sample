import React from 'react';
import { StyleSheet, View } from 'react-native';

import CloseButton from '@/components/common/CustomHeader/components/CloseButton';
import Text from '@/components/common/Text';
import { COLORS, LAYOUT } from '@/constants';

function TitleBox() {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>프로필 설정하기</Text>
        <Text style={styles.subTitleText}>프로필 설정을 하면 회원 가입이 완료돼요.</Text>
      </View>
      <CloseButton style={styles.closeButton} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TitleBox;
