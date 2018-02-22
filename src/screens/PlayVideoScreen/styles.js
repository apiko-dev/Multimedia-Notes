import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    flex: 1,
  },
  video: {
    width: '100%',
    flex: 1,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primaryColor,
    shadowOffset: { width: -2, height: 3 },
    shadowColor: colors.gray,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  playButtonError: {
    padding: 8,
    backgroundColor: colors.secondaryColor,
  },
  playIcon: {
    marginLeft: 5,
  },
});

export default styles;
