import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/styles';

export default function Target() {
  return (
    <View style={styles.targetContainer}>
      <Image source={require('../assets/target.png')} style={styles.target} />
    </View>
  );
}
