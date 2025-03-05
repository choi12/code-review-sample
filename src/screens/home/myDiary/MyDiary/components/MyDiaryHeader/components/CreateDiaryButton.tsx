import React from 'react';
import { StyleSheet, View } from 'react-native';

import AnimatedPressable from '@/components/common/AnimatedPressable';
import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS } from '@/constants';
import useScreenNavigation from '@/hooks/core/navigation/useScreenNavigation';

function CreateDiaryButton() {
  const navigation = useScreenNavigation();

  return (
    <AnimatedPressable
      onPress={() => navigation.navigate('CreateDiary', { diary: undefined })}
      pressedScale={0.98}
      pressedOpacity={0.99}
    >
      <View style={[styles.createDiaryButton]}>
        <Text style={styles.createDiaryButtonText}>일기 쓰러 가기</Text>
        <VectorIcon type="Ionicons" name="caret-down-outline" size={20} color={COLORS.CORE.MAIN} style={styles.icon} />
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({});

export default CreateDiaryButton;
