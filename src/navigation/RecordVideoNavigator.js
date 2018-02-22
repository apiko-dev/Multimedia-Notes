import { StackNavigator } from 'react-navigation';
import screens from './screens';

import RecordVideoScreen from '../screens/RecordVideoScreen';

const routes = {
  [screens.RecordVideo]: {
    screen: RecordVideoScreen,
  },
};

const ModalNavigator = StackNavigator(routes);

export default ModalNavigator;
