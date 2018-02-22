import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 150,
    width: '45%',
    margin: 10,
    borderColor: colors.border,
    borderWidth: 1,
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 10,
    height: 50,
  },
  left: {
    flex: 2,
    paddingRight: 5,
  },
  right: {
    flex: 1.5,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.medium,
    fontWeight: '500',
    color: colors.primaryColor,
  },
  durationText: {
    fontSize: fontSizes.medium,
    fontWeight: '700',
    textAlign: 'right',
  },
  dateText: {
    fontSize: fontSizes.small,
    paddingBottom: 2,
    fontWeight: '500',
  },
  secondaryText: {
    color: colors.secondaryColor,
  },
});

export default styles;
