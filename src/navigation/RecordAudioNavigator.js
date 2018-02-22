import { StackNavigator } from 'react-navigation';
import screens from './screens';

import RecordAudioScreen from '../screens/RecordAudioScreen';

const routes = {
  [screens.RecordAudio]: {
    screen: RecordAudioScreen,
  },
};

const RecordAudioNavigator = StackNavigator(routes);

export default RecordAudioNavigator;
