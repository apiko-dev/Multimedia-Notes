import {
  Animated,
  PanResponder,
} from 'react-native';
import {
  compose,
  withHandlers,
  withProps,
  withPropsOnChange,
  withState,
} from 'recompose';
import SliderView from './SliderView';


const enhancer = compose(
  withState('previousLeft', 'setPreviousLeft', 0),
  withProps(props => ({
    minimumValue: 0,
    currentValue: new Animated.Value(props.value),
    thumbSize: props.thumbSize || 16,
  })),
  withHandlers({
    setValue: props => nextValue => props.currentValue.setValue(nextValue),
    setValueAnimated: props => nextValue =>
      Animated.timing(props.currentValue, {
        toValue: nextValue,
        duration: 50,
      }).start(),
    getCurrentValue: props => () => props.currentValue.__getValue(),
    getValueFromGesture: props => (gestureState) => {
      const length = props.width - props.thumbSize;
      const thumbLeft = props.previousLeft + gestureState.dx;
      const value = (thumbLeft / length) * props.maximumValue;

      return Math.max(
        props.minimumValue,
        Math.min(
          props.maximumValue,
          value,
        ),
      );
    },
    getValueFromEvent: props => (e) => {
      const value = (e.nativeEvent.locationX / props.width) *
        props.maximumValue;

      return Math.max(
        props.minimumValue,
        Math.min(
          props.maximumValue,
          value,
        ),
      );
    },
    getThumbLeft: props => (value) => {
      const ratio = (value / props.maximumValue);
      return (
        ratio * (props.width - props.thumbSize)
      );
    },
  }),
  withHandlers({
    handleMoveShouldSetPanResponder: props => () => {
      return true;
    },
    handlePanResponderMove: props => (e, gestureState) => {
      if (props.disabled) {
        return;
      }
      props.setValue(props.getValueFromGesture(gestureState));
      props.onValueChange();
    },
    handlePanResponderEnd: props => (e, gestureState) => {
      if (props.disabled) {
        return;
      }

      props.onSlidingComplete(props.getCurrentValue());
    },
    handlePanResponderRequestEnd: props => () => {
      return true;
    },
    handlePanResponderGrant: props => (e) => {
      const value = props.getValueFromEvent(e);
      props.setValue(value);
      props.onSlidingStart(props.getCurrentValue());

      const previousLeft = props.getThumbLeft(props.getCurrentValue());
      props.setPreviousLeft(previousLeft);
    },
    handleStartShouldSetPanResponder: props => (e) => {
      return true;
    },
  }),
  withPropsOnChange(
    ['value'],
    props => props.setValueAnimated(props.value),
  ),
  withProps(props => ({
    thumbLeft: props.currentValue.interpolate({
      inputRange: [props.minimumValue, props.maximumValue],
      outputRange: [0, props.width - props.thumbSize],
    }),
    panResponder: PanResponder.create({
      onStartShouldSetPanResponder: props.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: props.handleMoveShouldSetPanResponder,
      onPanResponderGrant: props.handlePanResponderGrant,
      onPanResponderMove: props.handlePanResponderMove,
      onPanResponderRelease: props.handlePanResponderEnd,
      onPanResponderTerminationRequest: props.handlePanResponderRequestEnd,
      onPanResponderTerminate: props.handlePanResponderEnd,
    }),
  })),
);


export default enhancer(SliderView);
