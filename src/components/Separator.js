import React from 'react';
import T from 'prop-types';
import { View, ActivityIndicator, ViewPropTypes } from 'react-native';
import { compose, withProps } from 'recompose';
import { globalStyles } from '../styles';

const Separator = ({
  style,
  showSpinner,
}) => (
  <View style={style}>
    {showSpinner && <ActivityIndicator size="small" />}
  </View>
);

Separator.propTypes = {
  style: ViewPropTypes.style,
  showSpinner: T.bool,
};

export default compose(
  withProps(({
    small = false,
    marginLeft = false,
    withBorderBottom = true,
    withBorderTop = false,
    showSpinner = false,
    indent = 16,
  }) => ({
    style: [
      {
        height: small ? 0 : 20,
        marginLeft: marginLeft ? indent : 0,
      },
      withBorderBottom && globalStyles.withBorderBottom,
      withBorderTop && globalStyles.withBorderTop,
      showSpinner && {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: marginLeft ? -indent : 0,
      },
    ],
  })),
)(Separator);
