import { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import CodePush, { DownloadProgress, LocalPackage } from 'react-native-code-push';

import { MODAL_CONTENT, MODAL_BUTTON, STORE_URL, TOAST_BOTTOM_OFFSET } from '@/constants';
import useAlertModal from '@/hooks/store/useAlertModal';
import useLoading from '@/hooks/store/useLoading';
import useErrorToast from '@/hooks/ui/feedback/useErrorToast';
import { AlertModalContent } from '@/types/modal';
import { VersionStatus } from '@/types/version';
import { checkVersion } from '@/utils/common/checkVersion';
import { reportError } from '@/utils/error/reportError';

import useSignIn from '../../SignIn/hooks/useSignIn';

function useAppUpdate() {
  const [syncProgress, setSyncProgress] = useState<DownloadProgress>();

  const { autoSignIn } = useSignIn();
  const { showLoading, hideLoading } = useLoading();
  const { openAlertModal, closeAlertModal } = useAlertModal();
  const handleErrorWithToast = useErrorToast();

  const checkCodepushUpdate = useCallback(async () => {
    try {
      const update = await CodePush.checkForUpdate();
      if (!update) {
        await autoSignIn();
        return;
      }
      await update
        .download((progress: DownloadProgress) => setSyncProgress(progress))
        .then((newPackage: LocalPackage) =>
          newPackage
            .install(CodePush.InstallMode.IMMEDIATE)
            .then(() => CodePush.restartApp())
            .catch((error) => reportError(error)),
        );
    } catch (error) {
      reportError(error);
      await autoSignIn();
    }
  }, [autoSignIn]);

  const onUpdate = useCallback(async () => {
    try {
      const supported = await Linking.canOpenURL(STORE_URL);
      if (supported) {
        await Linking.openURL(STORE_URL);
      }
    } catch (error) {
      handleErrorWithToast(error, TOAST_BOTTOM_OFFSET.INNER_SCREEN);
    }
  }, [handleErrorWithToast]);

  const closeAlertModalAndSignIn = useCallback(async () => {
    closeAlertModal();
    await autoSignIn();
  }, [closeAlertModal, autoSignIn]);

  const getModalContent = useCallback(
    (status: VersionStatus): AlertModalContent =>
      status === VersionStatus.OPTIONAL
        ? {
            message: MODAL_CONTENT.UPDATE.REQUIRED,
            buttons: [
              { text: MODAL_BUTTON.UPDATE.LATER, onPress: closeAlertModalAndSignIn, style: 'cancel' },
              { text: MODAL_BUTTON.UPDATE.CONFIRM, onPress: onUpdate, style: 'default' },
            ],
            onPressBackground: closeAlertModalAndSignIn,
          }
        : {
            message: MODAL_CONTENT.UPDATE.REQUIRED,
            buttons: [{ text: MODAL_BUTTON.UPDATE.CONFIRM, onPress: onUpdate, style: 'default' }],
            onPressBackground: () => {},
          },
    [closeAlertModalAndSignIn, onUpdate],
  );

  const checkAppVersion = useCallback(async () => {
    try {
      showLoading();

      const versionData = await checkVersion();
      if (versionData.status !== VersionStatus.UP_TO_DATE) {
        const updateModalContent = getModalContent(versionData.status);
        openAlertModal(updateModalContent);
        return;
      }
      await checkCodepushUpdate();
    } catch (error) {
      reportError(error);
      await autoSignIn();
    } finally {
      hideLoading();
    }
  }, [checkCodepushUpdate, openAlertModal, showLoading, hideLoading, getModalContent, autoSignIn]);

  useEffect(() => {
    checkAppVersion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { syncProgress };
}
export default useAppUpdate;
