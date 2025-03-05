import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import { MISSION_PRESET } from '@/screens/home/myFlowerpot/Mission/data';
import { Mission } from '@/screens/home/myFlowerpot/Mission/hooks/useCompleteMission';

interface MissionContentProps {
  type: Mission;
  count: number;
  maxCount: number;
}

function MissionContent({ type, count, maxCount }: MissionContentProps) {
  return (
    <View style={styles.missionTextBox}>
      <Text style={styles.missionTitle}>
        {MISSION_PRESET[type].title}{' '}
        <Text style={styles.missionCountText}>
          [{count}/{maxCount}]
        </Text>
      </Text>
      <Text style={styles.missionContent}>{MISSION_PRESET[type].content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MissionContent;
