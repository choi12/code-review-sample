import React from 'react';
import { StyleSheet } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

const MISSION_RESET_TIME = '오전 5시';

function MissionListHeaderText() {
  return (
    <Text style={styles.infoText}>
      * 매일 <Text style={styles.underlinedText}>{MISSION_RESET_TIME}</Text>에 미션이 초기화돼요.
    </Text>
  );
}

const styles = StyleSheet.create({});

export default MissionListHeaderText;
