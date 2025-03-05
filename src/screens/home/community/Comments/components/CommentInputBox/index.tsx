import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import KeyboardAwareBox from '@/components/common/KeyboardAwareBox';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import { COLORS } from '@/constants';
import useUserInfo from '@/hooks/store/useUserInfo';
import { Profile } from '@/types/profile';

import { useCommentContext } from '../../context/CommentContext';

import CommentInput from './components/CommentInput';
import CreateCommentButton from './components/CreateCommentButton';

function CommentInputBox() {
  const { image, background, character } = useUserInfo(['image', 'background', 'character']) ?? {};
  const profile: Profile = {
    image: image ?? '',
    background: background ?? '',
    character: character ?? '',
  };

  const { isLoading, isError } = useCommentContext();
  const [text, setText] = useState('');

  if (isLoading || isError) return null;

  return (
    <KeyboardAwareBox>
      <View style={styles.commentInputBox}>
        {(image || (background && character)) && <ProfileImageBox size={42} profile={profile} />}
        <CommentInput text={text} onSetText={setText} />
        <CreateCommentButton text={text} setText={setText} />
      </View>
    </KeyboardAwareBox>
  );
}

const styles = StyleSheet.create({});

export default CommentInputBox;
