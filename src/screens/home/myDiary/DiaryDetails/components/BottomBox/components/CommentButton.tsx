import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { CommunityDiaryDTO } from '@/api/community/types';
import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, MAX_DISPLAY_COUNT, OVERFLOW_COUNT_TEXT } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';

interface CommentButtonProps {
  diary: CommunityDiaryDTO;
}

function CommentButton({ diary }: CommentButtonProps) {
  const navigation = useScreenNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Comments', { diaryIdx: diary.idx, author: diary.nickname })}
      style={styles.countButton}
    >
      <VectorIcon
        type="MaterialCommunityIcons"
        name="comment-processing"
        color={COLORS.GRAYSCALE.LIGHT_GRAY}
        size={25}
      />
      <Text style={styles.countText}>
        {diary.commentCount > MAX_DISPLAY_COUNT ? OVERFLOW_COUNT_TEXT : diary.commentCount}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default CommentButton;
