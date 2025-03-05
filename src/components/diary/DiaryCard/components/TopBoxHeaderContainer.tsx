import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

function TopBoxHeaderContainer({ children }: PropsWithChildren) {
  return <View style={styles.headerContainer}>{children}</View>;
}

const styles = StyleSheet.create({});

export default TopBoxHeaderContainer;
