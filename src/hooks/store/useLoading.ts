import { useStore } from '@/store';

function useLoading() {
  const { showLoading, hideLoading } = useStore((state) => ({
    showLoading: state.showLoading,
    hideLoading: state.hideLoading,
  }));

  return { showLoading, hideLoading };
}

export default useLoading;
