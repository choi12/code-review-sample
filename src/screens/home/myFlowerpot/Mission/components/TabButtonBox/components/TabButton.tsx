import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

interface TabButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onPress: () => void;
}

function TabButton({ label, count, isActive, onPress }: TabButtonProps) {
  const isDisabled = count < 1;

  return (
    <Pressable onPress={onPress} disabled={isDisabled} style={[styles.tabButton, isActive && styles.activeTabButton]}>
      <Text style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
        {label} <Text style={[styles.countText, isDisabled && styles.disabledCountText]}>{count}</Text>
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default TabButton;
