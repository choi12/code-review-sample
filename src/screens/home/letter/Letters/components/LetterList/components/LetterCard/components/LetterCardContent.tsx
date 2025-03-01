import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LetterDTO } from '@/api/letter/types';
import Text from '@/components/common/Text';
import { COLORS, FONTS } from '@/constants';
import { formatDate } from '@/utils/common/formatDate';

interface LetterCardContentProps {
  letter: LetterDTO;
}

function LetterCardContent({ letter }: LetterCardContentProps) {
  return (
    <View style={styles.letterTextBox}>
      <View style={styles.dateTextBox}>
        <Text style={styles.dateText}>{formatDate(letter.createdAt, 'diary')}</Text>
        <Text style={styles.ofText}>의</Text>
      </View>
      <Text style={styles.toText}>나에게</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LetterCardContent;
