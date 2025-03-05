import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import { SignInType } from '@/types/auth';

import { SIGN_IN_COLOR, SIGN_IN_ICON, SIGN_IN_LABEL } from '../data';

interface ButtonContentProps {
  type: SignInType;
}

function ButtonContent({ type }: ButtonContentProps) {
  return (
    <>
      <FastImage
        source={SIGN_IN_ICON[type]}
        style={[styles.icon, type === 'apple' && styles.appleIconAdjustment]}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[styles.text, { color: SIGN_IN_COLOR[type].text }]}>{SIGN_IN_LABEL[type]}</Text>
    </>
  );
}

const styles = StyleSheet.create({});

export default ButtonContent;
