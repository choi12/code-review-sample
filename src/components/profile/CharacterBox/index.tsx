import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { COLORS, LAYOUT } from '@/constants';

import { CHARACTER_ICONS } from './data';

interface CharacterBoxProps {
  character?: string;
  onSetCharacter: (character?: string) => void;
}

function CharacterBox({ character, onSetCharacter }: CharacterBoxProps) {
  return (
    <View style={styles.container}>
      {CHARACTER_ICONS.map((characterRow, rowIndex) => (
        <View key={rowIndex} style={styles.imageBox}>
          {characterRow.map(({ name, icon }) => (
            <TouchableOpacity
              key={name}
              onPress={() => onSetCharacter(name)}
              style={[styles.button, name === character && styles.buttonSelected]}
            >
              <FastImage source={icon} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default CharacterBox;
