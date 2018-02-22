import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    margin: 16,
    height: 28,
    width: '50%',
    alignSelf: 'center',
  },
  tabText: {
    color: colors.tabBar.text,
    fontWeight: '700',
    fontSize: fontSizes.medium,
  },
  activeTab: {
    backgroundColor: colors.tabBar.activeBackground,
    borderColor: colors.tabBar.border,
  },
  tabStyle: {
    backgroundColor: colors.tabBar.inactiveBackground,
    borderColor: colors.tabBar.border,
  },
});

export default styles;
