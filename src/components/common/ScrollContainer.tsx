import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import { COLORS, LAYOUT } from '@/constants';

interface ScrollContainerProps extends ScrollViewProps {
  hasPadding?: boolean;
  backgroundColor?: string;
}

function ScrollContainer(
  {
    children,
    hasPadding = false,
    backgroundColor = COLORS.GRAYSCALE.WHITE,
    style,
    contentContainerStyle,
    ...otherProps
  }: PropsWithChildren<ScrollContainerProps>,
  ref: ForwardedRef<ScrollView>,
) {
  return (
    <ScrollView
      ref={ref}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      overScrollMode="never"
      {...otherProps}
      style={[{ backgroundColor }, style]}
      contentContainerStyle={[hasPadding && { padding: LAYOUT.PADDING }, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  );
}

export default forwardRef(ScrollContainer);
