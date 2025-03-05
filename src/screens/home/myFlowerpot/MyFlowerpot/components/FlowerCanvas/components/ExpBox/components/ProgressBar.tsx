import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants';
import useFlowerpotStats from '@/screens/home/myFlowerpot/MyFlowerpot/hooks/useFlowerpotStats';

const TEXT_POSITION_THRESHOLD = 25;

function ProgressBar() {
  const { exp, maxExp, isMaxLevel } = useFlowerpotStats();

  const expValue = useSharedValue(exp);
  const maxExpValue = useSharedValue(maxExp);

  const percent = useDerivedValue(() => Number(((expValue.value / maxExpValue.value) * 100).toFixed(1)));
  const progress = useDerivedValue(() => expValue.value / maxExpValue.value);

  const animatedProgressBarStyle = useAnimatedStyle(() => ({ flex: progress.value }));

  useEffect(() => {
    expValue.value = withTiming(exp, { duration: 1000 });
    maxExpValue.value = maxExp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exp, maxExp]);

  return (
    <LinearGradient style={styles.track} colors={[COLORS.TRANSPARENT.WHITE_90, COLORS.TRANSPARENT.WHITE_20]}>
      {!isMaxLevel && (
        <>
          <Animated.View style={[styles.progressBar, animatedProgressBarStyle]}>
            <LinearGradient style={styles.gradientBox} colors={[COLORS.ACCENT.LIME, COLORS.CORE.MAIN]}>
              {percent.value > TEXT_POSITION_THRESHOLD && <Text style={styles.innerExpText}>{percent.value}%</Text>}
            </LinearGradient>
          </Animated.View>
          {percent.value <= TEXT_POSITION_THRESHOLD && <Text style={styles.expText}>{percent.value}%</Text>}
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});

export default ProgressBar;
