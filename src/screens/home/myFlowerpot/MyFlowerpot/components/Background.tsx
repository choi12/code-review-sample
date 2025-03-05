import LottieView from 'lottie-react-native';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { FadeIn } from 'react-native-reanimated';

import { HomeBGBottom, HomeBGTop } from '@/assets/images';
import { LottieBaloon, LottieBirds } from '@/assets/lottie';
import Container from '@/components/common/Container';
import ErrorView from '@/components/common/stateView/ErrorView';
import LoadingView from '@/components/common/stateView/LoadingView';
import { delay } from '@/utils/common/delay';

import { useFlowerpotContext } from '../context/flowerpot/FlowerpotContext';

function Background({ children }: PropsWithChildren) {
  const { isLoading, isError, refetch } = useFlowerpotContext();
  const [showBirdsLottie, setShowBirdsLottie] = useState(false);

  // 레이아웃 안정성을 위해 로티 초기화 시점 조정
  useEffect(() => {
    const playBirdsLottie = async () => {
      await delay(30);
      setShowBirdsLottie(true);
    };
    playBirdsLottie();
  }, []);

  if (isLoading) return <LoadingView />;
  if (isError) return <ErrorView reload={refetch} />;

  return (
    <Container>
      <View style={styles.topBox}>
        <FastImage source={HomeBGTop} style={styles.backgroundTopImage} resizeMode={FastImage.resizeMode.stretch} />
        {showBirdsLottie && (
          <Animated.View style={styles.birdsLottieBox} entering={FadeIn.duration(500)}>
            <LottieView autoPlay source={LottieBirds} style={styles.birdsLottie} />
          </Animated.View>
        )}
      </View>
      <View style={styles.bottomBox}>
        <FastImage
          source={HomeBGBottom}
          style={styles.backgroundBottomImage}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <LottieView source={LottieBaloon} autoPlay style={styles.baloonLottie} />
      </View>
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({});

export default Background;
