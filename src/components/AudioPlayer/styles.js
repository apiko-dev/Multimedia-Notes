import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 85,
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 20,
  },
  duration: {
    fontSize: fontSizes.small,
    color: colors.white,
    fontWeight: '600',
    backgroundColor: colors.audio.durationBackground,
  },
  titleText: {
    color: colors.white,
    fontSize: fontSizes.big,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.transparent,
  },
  playIcon: {
    marginLeft: 5,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    marginLeft: 15,
  },
});

export default styles;
