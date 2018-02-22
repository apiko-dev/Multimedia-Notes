import React from 'react';
import T from 'prop-types';
import { colors } from '../../styles';
import s from './styles';

const IconButton = ({
  IconSet,
  size = 16,
  iconName,
  enabled = true,
  color = colors.iconButton.tint,
  disabledColor = colors.iconButton.disabled,
  iconStyle,
  onPress,
}) => (
  <IconSet
    suppressHighlighting={false}
    onPress={onPress && onPress}
    style={[s.icon, size && { fontSize: size }, iconStyle]}
    color={enabled ? color : disabledColor}
    name={iconName}
  />
);

IconButton.propTypes = {
  iconName: T.string,
  iconStyle: T.any,
  size: T.number,
  IconSet: T.any,
  color: T.string,
  disabledColor: T.string,
  enabled: T.bool,
  onPress: T.func,
};

export default IconButton;
