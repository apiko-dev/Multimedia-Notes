import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  withWhiteBackground: {
    backgroundColor: colors.white,
  },
  alignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  withBorderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  withBorderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
});

export default styles;
