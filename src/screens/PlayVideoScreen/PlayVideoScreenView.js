import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Video } from 'expo';
import { Feather } from '@expo/vector-icons';
import { Icon, NavigationButton } from '../../components';
import { getParam } from '../../utils/navHelpers';
import { headerStyle, colors } from '../../styles';
import s from './styles';

const PlayVideoScreen = (props) => {
  const {
    videoUrl,
    isError,
    isLoading,
    isPlaying,
    onError,
    onLoad,
    onTogglePlaying,
  } = props;

  const icon = isError ? (
    <Icon
      size={50}
      IconSet={Feather}
      iconName="refresh-ccw"
      color={colors.white}
    />
  ) : (
    <Icon
      size={50}
      IconSet={Feather}
      iconName="play"
      color={colors.white}
      iconStyle={s.playIcon}
    />
  );

  return (
    <View style={s.root}>
      <Video
        source={{ uri: videoUrl }}
        style={s.video}
        shouldPlay={isPlaying}
        resizeMode="contain"
        useNativeControls={isPlaying}
        onLoad={onLoad}
        onError={onError}
      />
      {!isPlaying && (
        <TouchableOpacity
          style={[s.button, isError && s.playButtonError]}
          onPress={onTogglePlaying}
        >
          {isLoading
            ? <ActivityIndicator size="large" color={colors.white} />
            : icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

PlayVideoScreen.propTypes = {
  videoUrl: PropTypes.string,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onTogglePlaying: PropTypes.func,
};

PlayVideoScreen.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  title: getParam(navigation, 'title'),
  headerRight: (
    <NavigationButton
      text="Remove"
      enabled
      onPress={() => {
        getParam(navigation, 'remove')();
        navigation.dispatch(NavigationActions.back({ key: null }));
      }}
    />
  ),
});

export default PlayVideoScreen;
