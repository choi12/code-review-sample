import React, { PropsWithChildren } from 'react';
import { GestureResponderEvent, Modal, ModalProps, Pressable, StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

interface BaseModalProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
  allowPropagation?: boolean;
  isImageModal?: boolean;
}

function BaseModal({
  isVisible,
  children,
  onClose,
  allowPropagation = false,
  isImageModal = false,
  ...props
}: PropsWithChildren<BaseModalProps>) {
  if (!isVisible) return null;

  return (
    <Modal animationType="fade" visible={isVisible} transparent={true} onRequestClose={onClose} {...props}>
      <Pressable
        onPress={onClose}
        style={[styles.background, isImageModal && { backgroundColor: COLORS.TRANSPARENT.BLACK_90 }]}
      >
        <Pressable onPress={allowPropagation ? onClose : (e: GestureResponderEvent) => e.stopPropagation()}>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({});

export default BaseModal;
