import AppNavigator from '../../navigation/Navigator';
import * as types from './types';
import screens from '../../navigation/screens';
import { getResetAction } from '../../utils/navHelpers';

const getResetState = (state, screen) =>
  AppNavigator.router.getStateForAction(getResetAction(screen, undefined, null), state);

export default (state, action) => {
  switch (action.type) {
    default: {
      const newState = AppNavigator.router.getStateForAction(action, state);
      return (newState || state);
    }
  }
};
