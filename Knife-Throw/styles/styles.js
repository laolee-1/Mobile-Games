import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  targetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  target: {
    width: 200,
    height: 200,
  },
  throwButton: {
    padding: 20,
    backgroundColor: '#ff4757',
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  knife: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  knifeImage: {
    width: '100%',
    height: '100%',
  },
  scoreText: {
    fontSize: 24,
    color: '#fff',
    position: 'absolute',
    top: 50,
  },
});

export default styles;
