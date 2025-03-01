import { useStore } from '@/store';

function useBottomSheetModal() {
  const { openBottomSheetModal, closeBottomSheetModal } = useStore((state) => ({
    openBottomSheetModal: state.openBottomSheetModal,
    closeBottomSheetModal: state.closeBottomSheetModal,
  }));

  return { openBottomSheetModal, closeBottomSheetModal };
}

export default useBottomSheetModal;
