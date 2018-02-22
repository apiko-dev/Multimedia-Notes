import React from 'react';
import T from 'prop-types';
import { AppLoading, Permissions } from 'expo';
import { BackHandler, View, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
} from 'recompose';
import { NavigationActions } from 'react-navigation';
import store from './store';
import { globalStyles } from './styles';
import Navigator from './navigation';

UIManager.setLayoutAnimationEnabledExperimental &&   //eslint-disable-line
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = ({
  showLoading,
  setLoadingStatus,
  asyncJob,
}) => {
  if (showLoading) {
    return (
      <AppLoading
        startAsync={asyncJob}
        onFinish={() => setLoadingStatus(false)}
        onError={console.warn} // eslint-disable-line
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={globalStyles.fillAll}>
        <Navigator />
      </View>
    </Provider>
  );
};

App.propTypes = {
  showLoading: T.bool,
  setLoadingStatus: T.func,
  asyncJob: T.func,
};


const enhance = compose(
  withState('showLoading', 'setLoadingStatus', true),
  withHandlers({
    asyncJob: () => async () => {
      await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      await Permissions.askAsync(Permissions.CAMERA);
    },
    navigateBack: () => () => { // eslint-disable-line
      const { navigation } = store.getState();

      const currentStackScreen = navigation.index;
      const currentTab = navigation.routes[0].index;

      if (currentTab !== 0 || currentStackScreen !== 0) {
        store.dispatch(NavigationActions.back({ key: null }));
        return true;
      }

      // otherwise let OS handle the back button action
      return false;
    },
  }),
  lifecycle({
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.props.navigateBack);
    },
  }),
);

export default enhance(App);
