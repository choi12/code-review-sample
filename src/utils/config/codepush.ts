import CodePush, { CodePushOptions } from 'react-native-code-push';

export const CODE_PUSH_OPTIONS: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
};
