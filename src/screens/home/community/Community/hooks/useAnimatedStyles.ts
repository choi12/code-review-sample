import { useWindowDimensions } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { COLORS } from '@/constants';

import { useCommunityHeaderContext } from '../context/CommunityHeaderContext';

const ANIMATED_BUTTON_CONSTANTS = {
  DEFAULT_WIDTH: 82,
  PADDING_RIGHT: 12,
  BORDER_RADIUS: 12,
} as const;

function useAnimatedStyles() {
  const { width } = useWindowDimensions();
  const { isScrolled } = useCommunityHeaderContext();

  const animatedStatusBoxStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(isScrolled ? COLORS.GRAYSCALE.WHITE : COLORS.CORE.BACKGROUND),
    }),
    [isScrolled],
  );

  const animatedButtonBoxStyle = useAnimatedStyle(
    () => ({
      paddingRight: withTiming(isScrolled ? 0 : ANIMATED_BUTTON_CONSTANTS.PADDING_RIGHT),
      backgroundColor: withTiming(isScrolled ? COLORS.GRAYSCALE.WHITE : COLORS.CORE.BACKGROUND),
    }),
    [isScrolled],
  );

  const animatedButtonStyle = useAnimatedStyle(
    () => ({
      width: withTiming(isScrolled ? width : ANIMATED_BUTTON_CONSTANTS.DEFAULT_WIDTH),
      borderRadius: withTiming(isScrolled ? 0 : ANIMATED_BUTTON_CONSTANTS.BORDER_RADIUS),
    }),
    [isScrolled, width],
  );

  return {
    animatedStatusBoxStyle,
    animatedButtonBoxStyle,
    animatedButtonStyle,
  };
}

export default useAnimatedStyles;
