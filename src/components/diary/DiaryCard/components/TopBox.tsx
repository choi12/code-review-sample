import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

function TopBox({ children }: PropsWithChildren) {
  return <View style={styles.topBox}>{children}</View>;
}

const styles = StyleSheet.create({});

export default TopBox;
