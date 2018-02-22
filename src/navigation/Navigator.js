import { StackNavigator } from 'react-navigation';
import screens from './screens';

import MainAppTabNavigator from './MainAppTabNavigator';

const routes = {
  [screens.App]: { screen: MainAppTabNavigator },
};

const MainNavigator = StackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});

export default MainNavigator;
