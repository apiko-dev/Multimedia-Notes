import {
  lifecycle,
} from 'recompose';

/**
 * Takes an object of params which should be passed to navigation state
 * Also can accept the callback with props as an argument which should return an object
 * with params.
 * Params will be passed to navigation on componentDidMount
 * @param  {Object|Function} params object or or function param-creator
 * @return {HoC}             Higher ordered component
 */

const setParamsOnDidMount = params =>
  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams(
        typeof params === 'function'
          ? params(this.props)
          : params,
      );
    },
  });

export default setParamsOnDidMount;
