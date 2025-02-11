import React from 'react';
import { GestureResponderEvent, Modal, Pressable, StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LAYOUT } from '@/constants';

interface ProfileImageTypeModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onSelectPhotoType: () => void;
  onSelectCharacterType: () => void;
}

function ProfileImageTypeModal({
  isVisible,
  onCancel,
  onSelectPhotoType,
  onSelectCharacterType,
}: ProfileImageTypeModalProps) {
  return (
    <Modal animationType="fade" visible={isVisible} transparent={true} onRequestClose={onCancel}>
      <Pressable onPress={onCancel} style={styles.background}>
        <Pressable onPress={(e: GestureResponderEvent) => e.stopPropagation()} style={styles.modalBox}>
          <View style={styles.buttonBox}>
            <Pressable onPress={onSelectPhotoType} style={styles.closeButton}>
              <VectorIcon
                type="MaterialIcons"
                name="add-photo-alternate"
                size={18}
                color={COLORS.GRAYSCALE.LIGHT_BLACK}
              />
              <Text style={styles.closeButtonText}>사진 선택하기</Text>
            </Pressable>
            <Pressable onPress={onSelectCharacterType} style={styles.confirmButton}>
              <VectorIcon type="FontAwesome" name="user" size={15} color={COLORS.CORE.MAIN} />
              <Text style={styles.confirmButtonText}>캐릭터 만들기</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({});

export default ProfileImageTypeModal;
