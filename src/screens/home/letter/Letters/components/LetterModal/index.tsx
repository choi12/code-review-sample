import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { AnimatedStyle } from 'react-native-reanimated';

import { LetterDTO } from '@/api/letter/types';
import { LetterPaper } from '@/assets/images';
import BaseModal from '@/components/modal/BaseModal';

import LetterModalContent from './components/LetterModalContent';

interface LetterModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  selectedLetter: LetterDTO;
  animatedStyle: AnimatedStyle;
}

function LetterModal({ isVisible, onCloseModal, selectedLetter, animatedStyle }: LetterModalProps) {
  return (
    <BaseModal isVisible={isVisible} onClose={onCloseModal} allowPropagation>
      <Animated.View style={[styles.modalBox, animatedStyle]}>
        <FastImage source={LetterPaper} style={styles.modalBackgroundImage} resizeMode={FastImage.resizeMode.stretch} />
        <LetterModalContent selectedLetter={selectedLetter} />
      </Animated.View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({});

export default LetterModal;
