import React from 'react';
import { GestureResponderEvent, Modal, Pressable, StyleSheet } from 'react-native';

import { COLORS, LAYOUT } from '@/constants';
import useAlertModal from '@/hooks/store/useAlertModal';
import { useStore } from '@/store';

import AlertModalButtonBox from './components/AlertModalButtonBox';
import AlertModalContentBox from './components/AlertModalContentBox';

function AlertModal() {
  const { isVisible, content } = useStore((state) => state.alert);
  const { closeAlertModal: closeModal } = useAlertModal();

  return (
    <Modal animationType="fade" visible={isVisible} transparent={true} onRequestClose={closeModal}>
      <Pressable onPress={content?.onPressBackground ?? closeModal} style={styles.background}>
        <Pressable onPress={(e: GestureResponderEvent) => e.stopPropagation()} style={styles.modalBox}>
          <AlertModalContentBox />
          <AlertModalButtonBox />
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({});

export default AlertModal;
