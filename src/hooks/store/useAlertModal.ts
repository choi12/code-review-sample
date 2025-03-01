import { useStore } from '@/store';

function useAlertModal() {
  const { openAlertModal, closeAlertModal } = useStore((state) => ({
    openAlertModal: state.openAlertModal,
    closeAlertModal: state.closeAlertModal,
  }));

  return { openAlertModal, closeAlertModal };
}

export default useAlertModal;
