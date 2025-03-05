import dayjs from 'dayjs';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';
import { Day } from '@/hooks/features/calendar/useCalendar';

interface MonthSelectorProps {
  selectedMonth: Day;
  setSelectedMonth: (date: Day) => void;
}

function MonthSelector({ selectedMonth, setSelectedMonth }: MonthSelectorProps) {
  const isNextMonthDisabled = dayjs().isSameOrBefore(selectedMonth, 'month');

  const handleMoveToPrevMonth = () => setSelectedMonth(selectedMonth.subtract(1, 'month'));
  const handleMoveToNextMonth = () => setSelectedMonth(selectedMonth.add(1, 'month'));

  return (
    <View style={styles.monthBox}>
      <Pressable onPress={handleMoveToPrevMonth} style={styles.monthButton}>
        <VectorIcon type="AntDesign" name="caretleft" size={16} color={COLORS.CORE.MAIN} />
      </Pressable>
      <View style={styles.monthTextBox}>
        <Text style={styles.yearText}>{selectedMonth.format('YYYY')}</Text>
        <Text style={styles.monthText}>{selectedMonth.format('M')}</Text>
      </View>
      <Pressable disabled={isNextMonthDisabled} onPress={handleMoveToNextMonth} style={styles.monthButton}>
        <VectorIcon
          type="AntDesign"
          name="caretright"
          size={16}
          color={isNextMonthDisabled ? COLORS.GRAYSCALE.LIGHT_GRAY : COLORS.CORE.MAIN}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MonthSelector;
