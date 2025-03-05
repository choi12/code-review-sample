import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { CommunityDiaryDTO } from '@/api/community/types';
import Container from '@/components/common/Container';
import ScrollContainer from '@/components/common/ScrollContainer';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import { formatDate } from '@/utils/common/formatDate';

import StickerImage from '../../CreateDiary/components/StickerImage';
import { STICKER_ICONS } from '../../CreateDiary/data';

interface DiaryContentProps {
  onToggleImageModal: () => void;
  diary: CommunityDiaryDTO;
}

function DiaryContent({ onToggleImageModal, diary }: DiaryContentProps) {
  const sticker = STICKER_ICONS.find((icon) => icon.name === diary.sticker);

  return (
    <ScrollContainer hasPadding>
      <Container>
        <View style={styles.diaryContentBox}>
          {sticker && <StickerImage name={sticker.name} size={50} />}
          <Text style={styles.dateText}>{formatDate(diary.createdAt, 'diary')}</Text>
          <Text style={styles.contentText}>{diary.text}</Text>
          {diary.image && (
            <Pressable onPress={onToggleImageModal}>
              <FastImage
                source={{ uri: diary.image }}
                style={styles.diaryImage}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Pressable>
          )}
        </View>
      </Container>
    </ScrollContainer>
  );
}

const styles = StyleSheet.create({});

export default DiaryContent;
