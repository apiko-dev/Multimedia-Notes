import React from 'react';
import T from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { Icon } from '../../../components';
import { colors } from '../../../styles';

const TabIcon = iconName => ({
  focused,
}) => (
  <Icon
    size={28}
    IconSet={Feather}
    iconName={iconName}
    color={focused
      ? colors.tabNavigator.activeTabIcon
      : colors.tabNavigator.inactiveTabIcon}
  />
);

TabIcon.propTypes = {
  focused: T.bool,
};

export default TabIcon;
