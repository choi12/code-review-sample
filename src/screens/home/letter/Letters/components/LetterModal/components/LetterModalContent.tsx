import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LetterDTO } from '@/api/letter/types';
import Text from '@/components/common/Text';
import { COLORS, FONTS } from '@/constants';
import { formatDate } from '@/utils/common/formatDate';
import { removeLineBreaks } from '@/utils/common/removeLineBreaks';

interface LetterModalContentProps {
  selectedLetter: LetterDTO;
}

function LetterModalContent({ selectedLetter }: LetterModalContentProps) {
  return (
    <View style={styles.modalContentBox}>
      <View style={styles.modalTitleBox}>
        <Text style={styles.modalDateText}>{formatDate(selectedLetter.createdAt, 'diary')}</Text>
      </View>
      <Text style={styles.modalContentText}>{removeLineBreaks(selectedLetter.text)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LetterModalContent;
