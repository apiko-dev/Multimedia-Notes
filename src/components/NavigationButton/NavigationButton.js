import React from 'react';
import T from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles';
import s from './styles';

const NavigationButton = ({
  text,
  onPress,
  icon,
  enabled,
  color = colors.navigationButton.disabled,
  enabledColor = colors.navigationButton.enabled,
  containerStyle,
  textStyle,
  hitSlop = 10,
}) => (
  <TouchableOpacity
    onPress={() => enabled && onPress()}
    hitSlop={{ top: hitSlop, bottom: hitSlop, right: hitSlop, left: hitSlop }}
  >
    <View style={[s.container, containerStyle]}>
      {icon && icon}
      <Text style={[s.text, { color: enabled ? enabledColor : color }, textStyle]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

NavigationButton.propTypes = {
  text: T.string,
  textStyle: T.any,
  onPress: T.func,
  icon: T.element,
  color: T.string,
  enabledColor: T.string,
  containerStyle: T.any,
  enabled: T.bool,
  hitSlop: T.number,
};

export default NavigationButton;
