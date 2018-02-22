import { StackNavigator } from 'react-navigation';
import screens from './screens';

import LibraryScreen from '../screens/LibraryScreen';
import PlayVideoScreen from '../screens/PlayVideoScreen';

const routes = {
  [screens.Library]: {
    screen: LibraryScreen,
  },
  [screens.PlayVideo]: {
    screen: PlayVideoScreen,
  },
};

const LibraryNavigator = StackNavigator(routes);

export default LibraryNavigator;
