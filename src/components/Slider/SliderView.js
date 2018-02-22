import React from 'react';
import T from 'prop-types';
import {
  View,
  Animated,
} from 'react-native';
import s from './styles';

const SliderView = ({
  width,
  thumbLeft,
  thumbSize,
  panResponder,
}) => (
  <View
    style={[s.container, { height: thumbSize * 2 }]}
  >
    <View
      style={[s.trackLine, { width }]}
    />

    <Animated.View
      style={[s.thumb, {
          left: thumbLeft,
          width: thumbSize,
          height: thumbSize,
          borderRadius: thumbSize / 2,
        }]}
    />

    <View
      style={s.absoluteFill}
      {...panResponder.panHandlers}
    />
  </View>
);

SliderView.propTypes = {
  width: T.number,
  thumbSize: T.number,
  thumbLeft: T.object,
  panResponder: T.object,
};


export default SliderView;
