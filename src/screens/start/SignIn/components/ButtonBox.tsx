import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Field } from '@/assets/images';
import { isAndroid } from '@/constants';
import { SignInType } from '@/types/auth';

import SignInButton from './SignInButton';

const BUTTON_ORDER: SignInType[] = isAndroid ? ['google', 'apple'] : ['apple', 'google'];

function ButtonBox() {
  return (
    <View style={styles.bottomBox}>
      <FastImage source={Field} style={styles.fieldImage} resizeMode={FastImage.resizeMode.stretch} />
      <View style={styles.buttonWrapper}>
        {BUTTON_ORDER.map((signInType) => (
          <SignInButton key={signInType} type={signInType} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ButtonBox;
