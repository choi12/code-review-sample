import { FastImageProps } from 'react-native-fast-image';

export type ActionControlConfig = {
  onPress: () => void;
  disabled: boolean;
  count: number;
  style: FastImageProps['style'];
};
