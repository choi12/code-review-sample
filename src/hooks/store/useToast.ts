import { useStore } from '@/store';

function useToast() {
  const { showToast, hideToast } = useStore((state) => ({ showToast: state.showToast, hideToast: state.hideToast }));

  return { showToast, hideToast };
}

export default useToast;
