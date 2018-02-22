import React from 'react';
import T from 'prop-types';
import { TabBarBottom, NavigationActions } from 'react-navigation';
import { withProps } from 'recompose';

const TabBarBottomCustom = ({
  customJumpToIndex,
  ...props
}) => (
  <TabBarBottom
    {...props}
    jumpToIndex={customJumpToIndex}
  />
);

TabBarBottomCustom.propTypes = {
  customJumpToIndex: T.func,
};

const enhancer = withProps(props => ({
  customJumpToIndex: (index) => {
    const lastPosition = props.navigationState.index;
    const tab = props.navigationState.routes[index];
    const tabRoute = tab.routeName;
    const firstTab = tab.routes[0].routeName;

    if (lastPosition !== index) {
      props.navigation.dispatch(NavigationActions.navigate({ routeName: tabRoute }));
    } else {
      props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: firstTab })],
      }));
    }
  },
}));

export default enhancer(TabBarBottomCustom);
