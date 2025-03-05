import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LAYOUT } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';

import useEmailSender from '../../../hooks/useEmailSender';
import { SettingMenuConfig } from '../../../types';

interface MenuItemProps {
  menuItem: SettingMenuConfig;
}

function MenuButton({ menuItem }: MenuItemProps) {
  const navigation = useScreenNavigation();

  const { sendEmail } = useEmailSender();

  const handleMenuButtonPress = async () => {
    if (menuItem.title === '문의하기') {
      await sendEmail();
    } else {
      menuItem.onPress(navigation);
    }
  };

  return (
    <Pressable onPress={handleMenuButtonPress} style={styles.button}>
      <View style={styles.buttonLeftBox}>
        {menuItem.icon && menuItem.icon}
        <Text style={styles.buttonText}>{menuItem.title}</Text>
      </View>
      <VectorIcon type="Octicons" name="chevron-right" color={COLORS.GRAYSCALE.LIGHT_GRAY} size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default MenuButton;
