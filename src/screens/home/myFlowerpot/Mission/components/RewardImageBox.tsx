import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

import { REWARD_PRESET } from '../data';
import { RewardItem } from '../hooks/useCompleteMission';

interface RewardImageBoxProps {
  reward: RewardItem;
}

function RewardImageBox({ reward }: RewardImageBoxProps) {
  return (
    <View style={styles.modalImageBox}>
      <View style={styles.itemBox}>
        <FastImage
          source={REWARD_PRESET[reward.item].image}
          style={[styles.modalImage, reward.item === 'love' && styles.rewardLoveImage]}
        />
        <Text style={styles.modalImageText}>{`${REWARD_PRESET[reward.item].name}`}</Text>
      </View>
      <Text style={styles.amountText}>×{reward.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default RewardImageBox;
