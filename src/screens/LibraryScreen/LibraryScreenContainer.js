import { connect } from 'react-redux';
import { LayoutAnimation } from 'react-native';
import { Audio } from 'expo';
import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
  withPropsOnChange, withStateHandlers, lifecycle,
} from 'recompose';
import { audioSelectors, audioOperations } from '../../modules/audio';
import { videoSelectors, videoOperations } from '../../modules/video';
import LibraryScreenView from './LibraryScreenView';
import { setParamsOnDidMount, withClassVariableHandlers } from '../../utils/enhancers';

const mapStateToProps = state => ({
  audioItems: audioSelectors.getAllAudioItems(state),
  videoItems: videoSelectors.getAllVideoItems(state),
});

const mapDispatchToProps = {
  removeAudio: audioOperations.removeAudio,
  removeVideo: videoOperations.removeVideo,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withClassVariableHandlers({
    playbackInstance: null,
    isSeeking: false,
    shouldPlayAtEndOfSeek: false,
    playingAudio: null,
  }, 'setClassVariable'),
  withStateHandlers({
    position: null,
    duration: null,
    shouldPlay: false,
    isLoading: true,
    isPlaying: false,
    isBuffering: false,
    showPlayer: false,
  }, {
    setState: () => obj => obj,
    setShowPlayer: () => (showPlayer) => {
      LayoutAnimation.easeInEaseOut();
      return ({ showPlayer });
    },
  }),
  withHandlers({
    soundCallback: props => (status) => {
      if (status.didJustFinish) {
        props.playbackInstance().stopAsync();
      } else if (status.isLoaded) {
        const position = props.isSeeking()
          ? props.position
          : status.positionMillis;
        const isPlaying = (props.isSeeking() || status.isBuffering)
          ? props.isPlaying
          : status.isPlaying;
        props.setState({
          position,
          duration: status.durationMillis,
          shouldPlay: status.shouldPlay,
          isPlaying,
          isBuffering: status.isBuffering,
        });
      }
    },
  }),
  withHandlers({
    loadPlaybackInstance: props => async (shouldPlay) => {
      props.setState({ isLoading: true });

      if (props.playbackInstance() !== null) {
        await props.playbackInstance().unloadAsync();
        props.playbackInstance().setOnPlaybackStatusUpdate(null);
        props.setClassVariable({ playbackInstance: null });
      }
      const { sound } = await Audio.Sound.create(
        { uri: props.playingAudio().audioUrl },
        { shouldPlay, position: 0, duration: 1, progressUpdateIntervalMillis: 50 },
        props.soundCallback,
      );

      props.setClassVariable({ playbackInstance: sound });

      props.setState({ isLoading: false });
    },
    onTogglePlaying: props => () => {
      if (props.playbackInstance() !== null) {
        if (props.isPlaying) {
          props.playbackInstance().pauseAsync();
        } else {
          props.playbackInstance().playAsync();
        }
      }
    },
    onPlay: props => () => {
      if (props.playbackInstance() !== null) {
        props.playbackInstance().playAsync();
      }
    },
    onStop: props => () => {
      if (props.playbackInstance() !== null) {
        props.playbackInstance().stopAsync();

        props.setShowPlayer(false);
        props.setClassVariable({ playingAudio: null });
      }
    },
    onStartSliding: props => (position) => {
      if (props.playbackInstance() !== null && !props.isSeeking()) {
        props.setState({ position, isPlaying: false });
        props.setClassVariable({ isSeeking: true, shouldPlayAtEndOfSeek: props.shouldPlay });
        props.playbackInstance().pauseAsync();
      }
    },
    onCompleteSliding: props => async (value) => {
      if (props.playbackInstance() !== null) {
        if (props.shouldPlayAtEndOfSeek) {
          await props.playbackInstance().playFromPositionAsync(value);
        } else {
          await props.playbackInstance().setPositionAsync(value);
        }
        props.setClassVariable({ isSeeking: false });
      }
    },
  }),

  withHandlers({
    playAudio: props => async (audio) => {
      props.setShowPlayer(true);
      props.setClassVariable({ playingAudio: audio });
      await props.loadPlaybackInstance(true);
    },
    stopPlayingAudio: props => () => {
      props.onStop();
    },
    removeAudio: props => (audioId) => {
      props.onStop();
      LayoutAnimation.easeInEaseOut();
      props.removeAudio(audioId);
    },
    playVideo: props => (video) => {
      props.navigation.navigate('PlayVideo', {
        title: video.title,
        remove: () => props.removeVideo(video.id),
        videoUrl: video.videoUrl,
      });
    },
  }),
  withState('selectedTabIndex', 'changeTab', 0),
  withPropsOnChange(
    ['selectedTabIndex'],
    props => props.navigation.setParams({ selectedTabIndex: props.selectedTabIndex }),
  ),
  setParamsOnDidMount(props => ({
    changeTab: props.changeTab,
  })),
  lifecycle({
    async componentDidMount() {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
    },
  }),
);

export default hoistStatics(enhancer)(LibraryScreenView);
