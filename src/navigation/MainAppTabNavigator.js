import { TabNavigator } from 'react-navigation';
import { TabBarBottom, TabIcon } from './components';
import screens from './screens';
import LibraryNavigator from './LibraryNavigator';
import RecordAudioNavigator from './RecordAudioNavigator';
import RecordVideoNavigator from './RecordVideoNavigator';
import { colors, fontSizes } from '../styles';

const TabRoutes = {
  [screens.LibraryTab]: {
    screen: LibraryNavigator,
    navigationOptions: {
      title: 'Library',
      tabBarIcon: TabIcon('package'),
    },
  },
  [screens.RecordAudioTab]: {
    screen: RecordAudioNavigator,
    navigationOptions: {
      title: 'Audio Recording',
      tabBarIcon: TabIcon('mic'),
    },
  },
  [screens.RecordVideoTab]: {
    screen: RecordVideoNavigator,
    navigationOptions: {
      title: 'Video Recording',
      tabBarIcon: TabIcon('video'),
    },
  },
};

const tabConfig = {
  initialRouteName: screens.LibraryTab,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: colors.tabNavigator.activeTabIcon,
    labelStyle: {
      fontSize: fontSizes.smallest,
      fontWeight: '600',
    },
    style: {
      backgroundColor: colors.tabNavigator.background,
      borderTopWidth: 0,
    },
  },

  animationEnabled: false,
  swipeEnabled: false,
};

export default TabNavigator(TabRoutes, tabConfig);
