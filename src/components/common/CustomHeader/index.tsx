import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewProps, Text as RNText, StyleProp, ViewStyle } from 'react-native';

import { COLORS, LAYOUT } from '@/constants';

import BackButton from './components/BackButton';
import CloseButton from './components/CloseButton';
import { FONT_STYLES, FontType } from './styles';

interface CustomHeaderProps extends ViewProps {
  title: string | ReactNode;
  rightItem?: ReactNode;
  font?: FontType;
  backgroundColor?: string;
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
  style?: StyleProp<ViewStyle>;
}

function CustomHeader({
  title,
  rightItem,
  font = 'DOVEMAYO',
  backgroundColor = COLORS.TRANSPARENT.TRANSPARENT,
  hasBackButton = false,
  hasCloseButton = false,
  style,
  ...otherProps
}: CustomHeaderProps) {
  return (
    <View
      {...otherProps}
      style={[styles.container, { backgroundColor }, hasCloseButton && { borderBottomWidth: 0 }, style]}
    >
      {hasBackButton && (
        <View style={styles.leftBox}>
          <BackButton />
        </View>
      )}
      {typeof title === 'string' ? <RNText style={FONT_STYLES[font]}>{title}</RNText> : title}
      <View style={styles.rightBox}>
        {hasCloseButton && <CloseButton style={styles.closeButton} />}
        {rightItem && rightItem}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CustomHeader;
