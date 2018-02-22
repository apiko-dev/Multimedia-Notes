import R from 'ramda';

import { NavigationActions as Actions } from 'react-navigation';

const action = (routeName, params) => Actions.navigate({ routeName, params });

export const getResetAction = (screens, lastScreenParams, key) => {
  const s = R.is(Array, screens) ? screens : [screens];

  return Actions.reset({
    index: s.length - 1,
    actions: [
      ...R.map(action, R.init(s)),
      action(R.last(s), lastScreenParams),
    ],
    key,
  });
};

export const getParam = (nav, paramName) => R.path(['state', 'params', paramName], nav);
export const getParamOr = (nav, paramName, or) => R.pathOr(or, ['state', 'params', paramName], nav);
