import { createFactory, Component } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';

const withClassVariableHandlers = (
  classVariablesMap,
  handlerName,
) => (BaseComponent) => {
  if (typeof classVariablesMap !== 'object') {
    throw new Error('classVariablesMap should be an object');
  }

  if (typeof handlerName !== 'string') {
    throw new Error('handlers should be a string');
  }

  const factory = createFactory(BaseComponent);
  class WithClassVariableHandlers extends Component {
    constructor(props, context) {
      super(props, context);

      this._getters = {};
      this._variables = {};

      Object.keys(classVariablesMap)
        .forEach((key) => {
          this._variables[key] = classVariablesMap[key];
          this._getters[key] = () => this._variables[key];
        });

      this._setter = this._setter.bind(this);
    }

    _setter(newVariables) {
      this._variables = Object.assign(this._variables, newVariables);
    }

    render() {
      return factory({
        ...this.props,
        ...this._getters,
        [handlerName]: this._setter,
      });
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(
      BaseComponent,
      'WithClassVariableHandlers',
    ))(WithClassVariableHandlers);
  }
  return WithClassVariableHandlers;
};

export default withClassVariableHandlers;
