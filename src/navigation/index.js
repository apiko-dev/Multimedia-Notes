import React from 'react';
import T from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Navigator from './Navigator';

const NavigatorContainer = ({
  navigation,
  dispatch,
}) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

NavigatorContainer.propTypes = {
  dispatch: T.func.isRequired,
  navigation: T.shape({
    index: T.number.isRequired,
    routes: T.arrayOf(T.shape({
      key: T.string.isRequired,
      routeName: T.string.isRequired,
    })),
  }).isRequired,
};

const mapStateToProps = ({ navigation }) => ({
  navigation,
});

export default connect(mapStateToProps)(NavigatorContainer);
