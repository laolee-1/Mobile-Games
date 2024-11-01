import React, { useEffect } from 'react';
import { Image } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import styles from '../styles/styles';

export default function Knife({ knifeY }) {
  const knifePosition = useSharedValue(500); // Starting position of the knife

  useEffect(() => {
    // Animate the knife position when knifeY changes
    knifePosition.value = withTiming(knifeY, { duration: 500 }, (finished) => {
      if (finished) {
        // Reset knife position after throw
        runOnJS(() => (knifePosition.value = 500));
      }
    });
  }, [knifeY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: knifePosition.value }],
  }));

  return (
    <Animated.View style={[styles.knife, animatedStyle]}>
      <Image source={require('../assets/knife.png')} style={styles.knifeImage} />
    </Animated.View>
  );
}
