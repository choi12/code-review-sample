import React, { useCallback, useEffect } from 'react';
import { BackHandler, GestureResponderEvent, Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '@/components/common/Text';
import VisibilityController from '@/components/controller/VisibilityController';
import { COLORS, LAYOUT } from '@/constants';
import useBottomSheetModal from '@/hooks/store/useBottomSheetModal';
import useModalAnimation from '@/hooks/ui/animation/useModalAnimation';
import { useStore } from '@/store';

function BottomSheetModal() {
  const { bottom: safeAreaBottomInset } = useSafeAreaInsets();
  const { isVisible: isModalVisible, contentArr } = useStore((state) => state.bottomSheet);
  const { closeBottomSheetModal: closeModal } = useBottomSheetModal();
  const { showAnimation, hideAnimation, animatedOpacityStyle, animatedTranslateYStyle } = useModalAnimation();

  const handleCloseModal = useCallback(async () => {
    await hideAnimation();
    closeModal();
  }, [hideAnimation, closeModal]);

  const handleBottomSheetItemPress = async (onItemSelect: () => void) => {
    await handleCloseModal();
    onItemSelect();
  };

  useEffect(() => {
    if (isModalVisible) {
      showAnimation();
    }
  }, [isModalVisible, showAnimation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isModalVisible) {
        handleCloseModal();
        return true;
      }
    });

    return () => backHandler.remove();
  }, [isModalVisible, handleCloseModal]);

  return (
    <VisibilityController isVisible={isModalVisible}>
      <Animated.View style={[styles.container, animatedOpacityStyle]}>
        <Pressable onPress={handleCloseModal} style={styles.background}>
          <Animated.View style={animatedTranslateYStyle}>
            <Pressable
              onPress={(e: GestureResponderEvent) => e.stopPropagation()}
              style={[styles.modalBox, { paddingBottom: safeAreaBottomInset }]}
            >
              {contentArr.map((bottomSheetItem, bottomSheetIndex) => (
                <Pressable
                  key={bottomSheetItem.title}
                  onPress={() => handleBottomSheetItemPress(bottomSheetItem.onPress)}
                  style={[styles.button, contentArr.length - 1 === bottomSheetIndex && styles.lastButton]}
                >
                  {bottomSheetItem.icon && bottomSheetItem.icon}
                  <Text style={[styles.buttonText, { color: bottomSheetItem.color }]}>{bottomSheetItem.title}</Text>
                </Pressable>
              ))}
            </Pressable>
          </Animated.View>
        </Pressable>
      </Animated.View>
    </VisibilityController>
  );
}

const styles = StyleSheet.create({});

export default BottomSheetModal;
