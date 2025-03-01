import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS, WEEKDAYS } from '@/constants';

const isWeekendDay = (weekdayIndex: number): weekdayIndex is 0 | 6 => weekdayIndex === 0 || weekdayIndex === 6;

function WeekdayBox() {
  return (
    <View style={styles.container}>
      {WEEKDAYS.map((weekday, weekdayIndex) => (
        <Text key={weekdayIndex} style={[styles.text, isWeekendDay(weekdayIndex) && { color: COLORS.CORE.MAIN }]}>
          {weekday}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default WeekdayBox;
