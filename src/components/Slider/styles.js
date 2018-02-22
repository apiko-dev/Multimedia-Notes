import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center',
  },
  trackLine: {
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.secondaryColor,
  },
  thumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  absoluteFill: {
    height: 30,
    zIndex: 999,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
