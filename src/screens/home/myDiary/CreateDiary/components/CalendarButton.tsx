import dayjs from 'dayjs';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';
import { Day } from '@/hooks/features/calendar/useCalendar';

interface CalendarButtonProps {
  selectedDate: Day;
  onPress: () => void;
}

function CalendarButton({ selectedDate, onPress }: CalendarButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.calendarButton}>
      <VectorIcon type="Entypo" name="calendar" size={14} color={COLORS.CORE.MAIN} />
      <Text style={styles.calendarButtonText}>{dayjs(selectedDate).format('YYYY년 M월 D일')}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default CalendarButton;
