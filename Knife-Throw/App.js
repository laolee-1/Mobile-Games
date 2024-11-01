import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Target from './components/Target';
import Knife from './components/Knife';
import styles from './styles/styles';

export default function App() {
  const [knifeY, setKnifeY] = useState(500); // Starting Y position off-screen
  const [score, setScore] = useState(0);

  const handleThrowKnife = () => {
    setKnifeY(-200); // Start knife animation towards target

    setTimeout(() => {
      // Check if the knife hit the target by examining Y position
      if (knifeY <= -180 && knifeY >= -220) { 
        setScore(score + 1); // Increment score
      }
      setKnifeY(500); // Reset knife position
    }, 500); // Duration of the knife throw animation
  };

  return (
    <View style={styles.container}>
      <Target />
      <Knife knifeY={knifeY} />

      <Text style={styles.scoreText}>Score: {score}</Text>
      <TouchableOpacity style={styles.throwButton} onPress={handleThrowKnife}>
        <Text style={styles.buttonText}>Throw Knife</Text>
      </TouchableOpacity>
    </View>
  );
}

