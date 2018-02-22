import {
  withProps,
} from 'recompose';
import R from 'ramda';

const getParam = (props, paramName) => R.path(
  ['navigation', 'state', 'params', paramName],
  props,
);

/**
 * Takes list of params which should be imported from navigation state
 * and will be passed to props
 * @param  {Array<String>} paramNames Param names (can be a single string)
 * @return {HoC}           Higher ordered component
 */

const paramsToProps = (...paramNames) =>
  withProps(props => ({
    ...(paramNames
      .reduce((acc, paramName) => {
        const param = getParam(props, paramName);

        if (typeof param !== 'undefined') {
          acc[paramName] = param;
        }

        return acc;
      }, {})
    ),
  }));

export default paramsToProps;
