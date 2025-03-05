import React from 'react';
import { StyleSheet } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import useUserInfo from '@/hooks/store/useUserInfo';

function NicknameBox() {
  const nickname = useUserInfo('nickname');

  return (
    <Text style={styles.nicknameText}>
      {(nickname || '') + ' '}
      <Text style={styles.myProfileText}> 내 정보 수정</Text>
    </Text>
  );
}

const styles = StyleSheet.create({});

export default NicknameBox;
