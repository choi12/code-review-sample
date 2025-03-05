import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { LAYOUT, COLORS } from '@/constants';

interface ContainerProps extends ViewProps {
  isMain?: boolean;
  hasPadding?: boolean;
  backgroundColor?: string;
}

function Container({
  children,
  isMain = false,
  hasPadding = false,
  backgroundColor = COLORS.GRAYSCALE.WHITE,
  style,
  ...otherProps
}: PropsWithChildren<ContainerProps>) {
  return (
    <View
      {...otherProps}
      style={[
        styles.container,
        { backgroundColor },
        isMain && { paddingBottom: LAYOUT.BOTTOM_TAB_HEIGHT },
        hasPadding && { padding: LAYOUT.PADDING },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});

export default Container;
