import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewProps, Text as RNText } from 'react-native';

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
}

function CustomHeader({
  title,
  rightItem,
  font = 'DOVEMAYO',
  backgroundColor = COLORS.TRANSPARENT.TRANSPARENT,
  hasBackButton = false,
  hasCloseButton = false,
  ...props
}: CustomHeaderProps) {
  return (
    <View
      {...props}
      style={[styles.container, { backgroundColor }, hasCloseButton && { borderBottomWidth: 0 }, props.style]}
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
