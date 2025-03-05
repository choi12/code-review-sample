import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import { REWARD_PRESET } from '@/screens/home/myFlowerpot/Mission/data';
import { useSidePannelContext } from '@/screens/home/myFlowerpot/MyFlowerpot/context/sidePannel/SidePannelContext';
import useFlowerpotStats from '@/screens/home/myFlowerpot/MyFlowerpot/hooks/useFlowerpotStats';
import { PlantAction } from '@/types/mission';

import { ActionControlConfig } from './types';

interface ActionButtonProps {
  type: PlantAction;
}

function ActionButton({ type }: ActionButtonProps) {
  const { onWateringPlant, onLovePlant } = useSidePannelContext();
  const { wateringCount, loveCount, canWater, canLove } = useFlowerpotStats();

  const ACTION_STATE: Record<PlantAction, ActionControlConfig> = {
    watering: {
      onPress: onWateringPlant,
      disabled: !canWater,
      count: wateringCount,
      style: styles.wateringImage,
    },
    love: {
      onPress: onLovePlant,
      disabled: !canLove,
      count: loveCount,
      style: styles.loveImage,
    },
  };
  const currentAction = ACTION_STATE[type];

  return (
    <Pressable
      onPress={currentAction.onPress}
      disabled={currentAction.disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        currentAction.disabled && styles.buttonDisabled,
      ]}
    >
      <FastImage source={REWARD_PRESET[type].image} style={currentAction.style} />
      <Text style={styles.buttonText}>{REWARD_PRESET[type].name}</Text>
      {currentAction.count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{currentAction.count}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default ActionButton;
