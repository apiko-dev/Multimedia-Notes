import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    height: 80,
  },
  left: {
    flex: 2,
    paddingHorizontal: 16,
  },
  right: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.xbig,
    fontWeight: '500',
    color: colors.primaryColor,
  },
  text: {
    fontSize: fontSizes.small,
    fontWeight: '500',
    lineHeight: 19,
    paddingBottom: 4,
  },
  durationText: {
    fontSize: fontSizes.medium,
    fontWeight: '700',
    paddingRight: 8,
    textAlign: 'right',
  },
  dateText: {
    fontSize: fontSizes.small,
    paddingBottom: 2,
    fontWeight: '600',
  },
  secondaryText: {
    color: colors.secondaryColor,
  },
});

export default styles;
