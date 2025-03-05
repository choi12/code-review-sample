import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants';
import { MISSION_PRESET } from '@/screens/home/myFlowerpot/Mission/data';
import { Mission } from '@/types/mission';

interface MissionIconProps {
  type: Mission;
}

function MissionIcon({ type }: MissionIconProps) {
  return <View style={styles.iconBox}>{MISSION_PRESET[type].icon}</View>;
}

const styles = StyleSheet.create({});

export default MissionIcon;
