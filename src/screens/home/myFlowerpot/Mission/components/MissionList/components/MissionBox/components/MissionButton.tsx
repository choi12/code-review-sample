import React from 'react';
import { StyleSheet, View } from 'react-native';

import AnimatedPressable from '@/components/common/AnimatedPressable';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

interface MissionButtonProps {
  tab: string;
  isCompleted: boolean;
  onCompleteMission: () => void;
  isPending: boolean;
}
function MissionButton({ tab, isCompleted, onCompleteMission, isPending }: MissionButtonProps) {
  if (tab === 'completed') {
    return (
      <View style={[styles.missionButton, styles.missionButtonCompleted]}>
        <Text style={[styles.missionButtonText, styles.missionButtonTextCompleted]}>완료</Text>
      </View>
    );
  }
  if (isCompleted) {
    return (
      <AnimatedPressable
        onPress={onCompleteMission}
        disabled={isPending}
        pressedScale={0.98}
        style={styles.missionButton}
      >
        <Text style={styles.missionButtonText}>보상 받기</Text>
      </AnimatedPressable>
    );
  }

  return null;
}

const styles = StyleSheet.create({});

export default MissionButton;
