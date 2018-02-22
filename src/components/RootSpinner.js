import React from 'react';
import T from 'prop-types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Spinner = ({
  size = 'large',
  style,
  color,
}) => (
  <View style={[styles.root, style]}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

Spinner.propTypes = {
  size: T.oneOf([
    'small',
    'large',
  ]),
  style: T.any,
  color: T.string,
};

export default Spinner;
