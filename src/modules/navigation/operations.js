import * as actions from './actions';
import screens from '../../navigation/screens';

export const navigateToApp = () => actions.resetTo(screens.App);
