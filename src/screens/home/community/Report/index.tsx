import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import CustomButton from '@/components/common/CustomButton';
import CustomHeader from '@/components/common/CustomHeader';
import SafeAreaContainer from '@/components/common/SafeAreaContainer';
import ScrollContainer from '@/components/common/ScrollContainer';
import Text from '@/components/common/Text';
import VectorIcon from '@/components/common/VectorIcon';
import { COLORS, LAYOUT, FONTS, TEXT } from '@/constants';
import useTypedRoute from '@/hooks/core/navigation/useTypedRoute';

import useReport from './hooks/useReport';

function Report() {
  const {
    params: { diaryIdx },
  } = useTypedRoute<'Report'>();

  const { inputRef, text, setText, handleReport, isPending } = useReport();

  return (
    <SafeAreaContainer backgroundColor={COLORS.CORE.BACKGROUND}>
      <CustomHeader title="신고/차단하기" hasCloseButton />
      <ScrollContainer backgroundColor={COLORS.CORE.BACKGROUND} contentContainerStyle={styles.scrollContainer}>
        <TextInput
          ref={inputRef}
          onChangeText={setText}
          style={styles.textInput}
          multiline
          placeholder={TEXT.PLACEHOLDER.REPORT}
          placeholderTextColor={COLORS.GRAYSCALE.LIGHT_GRAY}
        />
        <View style={styles.infoTextBox}>
          <VectorIcon type="Feather" name="alert-circle" size={14} color={COLORS.CORE.MAIN} />
          <Text style={styles.infoText}>신고가 접수되면, 해당 글의 작성자는 차단돼요.</Text>
        </View>
        <CustomButton title="신고하기" onPress={() => handleReport(diaryIdx)} disabled={!text} isLoading={isPending} />
      </ScrollContainer>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({});

export default Report;
