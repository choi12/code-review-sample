import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CommentDTO } from '@/api/comment/types';
import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';
import { formatDate } from '@/utils/common/formatDate';

import { useCommentContext } from '../../../context/CommentContext';

interface CommentContentProps {
  comment: CommentDTO;
}

function CommentContent({ comment }: CommentContentProps) {
  const { author } = useCommentContext();
  const isAuthor = author === comment.nickname;

  return (
    <View style={styles.rightBox}>
      <View style={styles.nicknameBox}>
        {isAuthor && (
          <VectorIcon
            type="MaterialIcons"
            name="verified"
            size={14}
            color={COLORS.CORE.MAIN}
            style={styles.verifiedIcon}
          />
        )}
        <Text style={styles.nicknameText}>{comment.nickname}</Text>
        <Text style={styles.dateText}>{formatDate(comment.createdAt)}</Text>
      </View>
      <Text style={styles.contentText}>{comment.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default React.memo(CommentContent);
