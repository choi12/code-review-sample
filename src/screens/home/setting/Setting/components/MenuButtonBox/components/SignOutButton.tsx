import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import useSignOut from '@/hooks/features/auth/useSignOut';

function SignOutButton() {
  const { openSignOutModal } = useSignOut();

  return (
    <TouchableOpacity onPress={openSignOutModal} style={styles.signoutButton}>
      <Text style={styles.signoutButtonText}>로그아웃</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default SignOutButton;
