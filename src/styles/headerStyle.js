import { Platform, StyleSheet } from 'react-native';
import colors from './colors';

const androidConfig = {
  paddingTop: 0,
  height: 56,
};

const headerStyle = {
  headerStyle: {
    ...(Platform.OS === 'ios' ? {} : androidConfig),
    backgroundColor: colors.navHeader.background,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    shadowOpacity: 0,
  },
  headerTintColor: colors.navHeader.tint,
  headerTitleStyle: {
    color: colors.navHeader.title,
  },
};

export default headerStyle;
