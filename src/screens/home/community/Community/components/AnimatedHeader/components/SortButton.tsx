import React, { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, MODAL_CONTENT } from '@/constants';
import useBottomSheetModal from '@/hooks/store/useBottomSheetModal';
import { BottomSheetModalContent } from '@/types/modal';

import { useCommunityHeaderContext } from '../../../context/CommunityHeaderContext';
import useAnimatedStyles from '../../../hooks/useAnimatedStyles';

const SORT_NAME = {
  latest: MODAL_CONTENT.DIARY.SORT.LATEST,
  popular: MODAL_CONTENT.DIARY.SORT.POPULAR,
} as const;

function SortButton() {
  const { sort, onSetSortType } = useCommunityHeaderContext();
  const { openBottomSheetModal: openModal } = useBottomSheetModal();
  const { animatedButtonStyle } = useAnimatedStyles();

  const handleOpenBottomSheetModal = useCallback(() => {
    const modalContent: BottomSheetModalContent[] = [
      {
        title: MODAL_CONTENT.DIARY.SORT.LATEST,
        icon: sort === 'latest' && <VectorIcon type="Feather" name="check" size={16} color={COLORS.CORE.MAIN} />,
        color: sort === 'latest' ? COLORS.CORE.MAIN : COLORS.GRAYSCALE.DARK_GRAY,
        onPress: () => onSetSortType('latest'),
      },
      {
        title: MODAL_CONTENT.DIARY.SORT.POPULAR,
        icon: sort === 'popular' && <VectorIcon type="Feather" name="check" size={16} color={COLORS.CORE.MAIN} />,
        color: sort === 'popular' ? COLORS.CORE.MAIN : COLORS.GRAYSCALE.DARK_GRAY,
        onPress: () => onSetSortType('popular'),
      },
    ];
    openModal(modalContent);
  }, [openModal, sort, onSetSortType]);

  return (
    <Pressable onPress={handleOpenBottomSheetModal}>
      <Animated.View style={[styles.button, animatedButtonStyle]}>
        <Text style={styles.text}>{SORT_NAME[sort]}</Text>
        <VectorIcon type="Ionicons" name="caret-down-outline" size={20} color={COLORS.CORE.MAIN} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default SortButton;
