import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

import BaseModal from '@/components/modal/BaseModal';

interface ImageModalProps {
  isVisible: boolean;
  onToggleModal: () => void;
  image: string;
}

function ImageModal({ isVisible, onToggleModal, image }: ImageModalProps) {
  const { width, height } = useWindowDimensions();

  return (
    <BaseModal isVisible={isVisible} onClose={onToggleModal} allowPropagation isImageModal>
      <View style={{ width, height }}>
        <FastImage source={{ uri: image }} style={styles.image} resizeMode={FastImage.resizeMode.contain} />
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({});

export default ImageModal;
