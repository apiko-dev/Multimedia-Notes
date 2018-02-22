import {
  lifecycle,
  withStateHandlers,
  withHandlers,
  compose,
} from 'recompose';
import { Audio } from 'expo';
import AudioPlayerView from './AudioPlayerView';

const enhancer = compose(
  // withStateHandlers(props => ({
  //   playbackInstance: null,
  //   isSeeking: false,
  //   shouldPlayAtEndOfSeek: false,
  //   position: 0,
  //   duration: props.duration,
  //   shouldPlay: false,
  //   isLoading: true,
  //   isPlaying: false,
  // }), {
  //   setState: () => obj => obj,
  // }),
  // withHandlers({
  //   soundCallback: props => (status) => {
  //     if (status.didJustFinish) {
  //       props.playbackInstance.stopAsync();
  //       props.stopPlaying();
  //     } else if (status.isLoaded) {
  //       props.setState({
  //         position: status.positionMillis,
  //         duration: status.durationMillis,
  //         shouldPlay: status.shouldPlay,
  //         isPlaying: status.isPlaying,
  //       });
  //     }
  //   },
  //   onCompleteSliding: props => (value) => {
  //     if (props.playbackInstance !== null) {
  //       props.setState({ isSeeking: false });
  //
  //       if (props.shouldPlayAtEndOfSeek) {
  //         props.playbackInstance.playFromPositionAsync(value);
  //       } else {
  //         props.playbackInstance.setPositionAsync(value);
  //       }
  //     }
  //   },
  //   onTogglePlaying: props => () => {
  //     if (props.playbackInstance !== null) {
  //       if (props.isPlaying) {
  //         props.playbackInstance.stopAsync();
  //         props.stopPlaying();
  //       } else {
  //         props.playbackInstance.playAsync();
  //       }
  //     }
  //   },
  //   onStop: props => async () => {
  //     if (props.playbackInstance !== null) {
  //       return;
  //     }
  //     await props.playbackInstance.stopAsync();
  //     props.setState({ isPlaying: false });
  //   },
  //   onStartSliding: props => () => {
  //     if (props.playbackInstance !== null && !props.isSeeking) {
  //       props.setState({ isSeeking: true, shouldPlayAtEndOfSeek: props.shouldPlay });
  //       props.playbackInstance.pauseAsync();
  //     }
  //   },
  // }),
  // withHandlers({
  //   loadPlaybackInstance: props => async () => {
  //     if (props.playbackInstance !== null) {
  //       await props.playbackInstance.unloadAsync();
  //       props.playbackInstance.setCallback(null);
  //       props.setState({ playbackInstance: null });
  //     }
  //     const { sound } = await Audio.Sound.create(
  //       { uri: props.audioUrl },
  //       null,
  //       props.soundCallback,
  //     );
  //     sound.setProgressUpdateIntervalAsync(100);
  //
  //     props.setState({ playbackInstance: sound });
  //
  //     props.setState({ isLoading: false });
  //   },
  // }),
  // lifecycle({
  //   async componentDidMount() {
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: false,
  //       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  //       playsInSilentModeIOS: true,
  //       shouldDuckAndroid: true,
  //       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  //     });
  //   },
  // }),
);

export default enhancer(AudioPlayerView);
