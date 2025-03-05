import { Platform } from 'react-native';
import Config from 'react-native-config';
import sendEmail from 'react-native-email';
import VersionCheck from 'react-native-version-check';

import { EmailSender } from '../types';

export const sendSupportEmail = async (senderInfo: EmailSender) => {
  const to = [Config.EMAIL_ADDRESS];
  const version = VersionCheck.getCurrentVersion();
  const buildNumber = VersionCheck.getCurrentBuildNumber();

  await sendEmail(to, {
    subject: '[sample-app] 문의',
    body: `${senderInfo.nickname}(${senderInfo.account})
Version: ${version} (${Platform.OS} ${buildNumber})
--------------------------------------------------

(문의 내용을 작성해 주세요.)

  `,
    checkCanOpen: false,
  });
};
