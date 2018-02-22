import { Audio } from 'expo';
import { connect } from 'react-redux';
import {
  withHandlers,
  hoistStatics,
  compose,
  withStateHandlers,
  lifecycle,
} from 'recompose';
import uuid from 'uuid';
import moment from 'moment';
import { audioOperations } from '../../modules/audio';
import screens from '../../navigation/screens';
import RecordAudioScreenView from './RecordAudioScreenView';

const mapDispatchToProps = {
  addAudio: audioOperations.addAudio,
};

const enhancer = compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    setAudioMode: () => async ({ allowsRecordingIOS }) => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        });
      } catch (error) {
        console.log(error) // eslint-disable-line
      }
    },
  }),
  withStateHandlers({
    recording: null,
    isRecording: false,
    durationMillis: 0,
    isDoneRecording: false,
    fileUrl: null,
    audioName: '',
  }, {
    setState: () => obj => obj,
    setAudioName: () => audioName => ({ audioName }),
    recordingCallback: () => ({ durationMillis, isRecording, isDoneRecording }) =>
      ({ durationMillis, isRecording, isDoneRecording }),
  }),
  withHandlers({
    onStartRecording: props => async () => {
      try {
        if (props.recording) {
          props.recording.setOnRecordingStatusUpdate(null);
          props.setState({ recording: null });
        }

        await props.setAudioMode({ allowsRecordingIOS: true });

        const recording = new Audio.Recording();
        recording.setOnRecordingStatusUpdate(props.recordingCallback);
        recording.setProgressUpdateInterval(200);

        props.setState({ fileUrl: null });

        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync();

        props.setState({ recording });
      } catch (error) {
        console.log(error) // eslint-disable-line
      }
    },

    onEndRecording: props => async () => {
      try {
        await props.recording.stopAndUnloadAsync();
        await props.setAudioMode({ allowsRecordingIOS: false });
      } catch (error) {
        console.log(error); // eslint-disable-line
      }

      if (props.recording) {
        const fileUrl = props.recording.getURI();
        props.recording.setOnRecordingStatusUpdate(null);
        props.setState({ recording: null, fileUrl });
      }
    },

    onCancelRecording: props => async () => {
      if (!props.recording) return;

      try {
        await props.recording.stopAndUnloadAsync();
      } catch (error) {
        // do nothing
      }

      props.recording.setOnRecordingStatusUpdate(null);
      props.setState({ recording: null });
    },
    onSubmit: props => () => {
      if (props.audioName && props.fileUrl) {
        const audioItem = {
          id: uuid(),
          recordDate: moment().format(),
          title: props.audioName,
          audioUrl: props.fileUrl,
          duration: props.durationMillis,
        };

        props.addAudio(audioItem);
        props.setState({
          audioName: '',
          isDoneRecording: false,
        });

        props.navigation.navigate(screens.LibraryTab);
      }
    },
    onCancelSave: props => () => {
      props.setState({
        audioName: '',
        isDoneRecording: false,
        fileUrl: null,
      });
    },
  }),
  lifecycle({
    componentWillUnmount() {
      this.props.onCancelRecording();
      this.props.setState({ recording: null });
    },
  }),
);

export default hoistStatics(enhancer)(RecordAudioScreenView);
