import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';

import { MyDiaryTab } from '../../../types';

interface ListTypeButtonBoxProps {
  selectedTab: MyDiaryTab;
  onSetTab: (tab: MyDiaryTab) => void;
}

function ListTypeButtonBox({ selectedTab, onSetTab }: ListTypeButtonBoxProps) {
  return (
    <View style={styles.listTypeButtonBox}>
      <Pressable onPress={() => onSetTab('calendar')} style={styles.listTypeButton}>
        <VectorIcon
          type="Entypo"
          name="calendar"
          size={20}
          color={selectedTab === 'calendar' ? COLORS.CORE.MAIN : COLORS.GRAYSCALE.LIGHT_GRAY}
        />
      </Pressable>
      <Pressable onPress={() => onSetTab('card')} style={styles.listTypeButton}>
        <VectorIcon
          type="Entypo"
          name="list"
          size={22}
          color={selectedTab === 'card' ? COLORS.CORE.MAIN : COLORS.GRAYSCALE.LIGHT_GRAY}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ListTypeButtonBox;
