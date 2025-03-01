import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';

type LicenseItem = {
  libraryName: string;
  _license: string;
  _description: string;
};

interface LicenseBoxProps {
  licenseInfo: LicenseItem;
}

function LicenseBox({ licenseInfo }: LicenseBoxProps) {
  return (
    <View style={styles.listBox}>
      <Text style={styles.libraryName}>{licenseInfo.libraryName}</Text>
      <Text style={styles.license}>{licenseInfo._license}</Text>
      <Text style={styles.description}>{licenseInfo._description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LicenseBox;
