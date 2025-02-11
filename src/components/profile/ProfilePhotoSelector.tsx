import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';
import useUserInfo from '@/hooks/store/useUserInfo';
import { SelectedImage } from '@/types/profile';

interface ProfilePhotoSelectorProps {
  selectedImage: SelectedImage | undefined;
  onOpenImagePicker: () => void;
  onClearImage: () => void;
}

function ProfilePhotoSelector({ onOpenImagePicker, selectedImage, onClearImage }: ProfilePhotoSelectorProps) {
  const userImage = useUserInfo('image');

  return (
    <>
      {!selectedImage ? (
        userImage && userImage !== '' ? (
          <FastImage source={{ uri: userImage }} style={styles.image} resizeMode={FastImage.resizeMode.cover} />
        ) : (
          <VectorIcon type="AntDesign" name="plus" size={30} color={COLORS.GRAYSCALE.WHITE} />
        )
      ) : (
        <View style={styles.imageBox}>
          <TouchableOpacity onPress={onOpenImagePicker}>
            <FastImage
              source={{ uri: selectedImage.uri }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </TouchableOpacity>
          <Pressable onPress={onClearImage} style={styles.deleteButton}>
            <VectorIcon type="Feather" name="trash-2" size={16} color={COLORS.GRAYSCALE.WHITE} />
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default ProfilePhotoSelector;
