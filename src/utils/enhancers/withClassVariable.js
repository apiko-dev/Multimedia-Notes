import { createFactory, Component } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';

const withClassVariable = (
  getClassVariableName,
  setClassVariable,
  initialValue = null,
) => (BaseComponent) => {
  const factory = createFactory(BaseComponent);
  class WithClassVariable extends Component {
    constructor(props, context) {
      super(props, context);

      this._classVariable = initialValue;

      this.setClassVariable = this.setClassVariable.bind(this);
    }

    setClassVariable(value) {
      this._classVariable = value;
    }

    render() {
      return factory({
        ...this.props,
        [getClassVariableName]: () => this._classVariable,
        [setClassVariable]: this.setClassVariable,
      });
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'WithClassVariable'))(WithClassVariable);
  }
  return WithClassVariable;
};

export default withClassVariable;
