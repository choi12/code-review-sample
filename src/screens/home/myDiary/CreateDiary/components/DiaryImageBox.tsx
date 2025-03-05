import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import AnimatedPressable from '@/components/common/AnimatedPressable';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LAYOUT } from '@/constants';
import { SelectedImage } from '@/types/profile';

interface DiaryImageBoxProps {
  diaryImage?: string;
  selectedImage?: SelectedImage;
  isDeleted: boolean;
  onOpenImagePicker: () => void;
  onClearImage: () => void;
}

function DiaryImageBox({ diaryImage, selectedImage, isDeleted, onOpenImagePicker, onClearImage }: DiaryImageBoxProps) {
  const hasDiaryImage = !!(diaryImage && !isDeleted);
  const imageUrl: string | undefined = selectedImage ? selectedImage.uri : hasDiaryImage ? diaryImage : undefined;

  return (
    <View style={styles.imageSection}>
      <View style={styles.imageBox}>
        <AnimatedPressable onPress={onOpenImagePicker} style={styles.imageButton}>
          {imageUrl ? (
            <FastImage source={{ uri: imageUrl }} style={styles.image} resizeMode={FastImage.resizeMode.cover} />
          ) : (
            <VectorIcon type="MaterialIcons" name="add-photo-alternate" size={25} color={COLORS.GRAYSCALE.LIGHT_GRAY} />
          )}
        </AnimatedPressable>
        {imageUrl && (
          <Pressable onPress={onClearImage} style={styles.deleteButton}>
            <VectorIcon type="Feather" name="trash-2" size={19} color={COLORS.GRAYSCALE.WHITE} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default DiaryImageBox;
