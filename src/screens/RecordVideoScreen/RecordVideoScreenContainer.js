import { Camera } from 'expo';
import {
  withHandlers,
  hoistStatics,
  compose,
  withStateHandlers, lifecycle,
} from 'recompose';
import moment from 'moment/moment';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { videoOperations } from '../../modules/video';
import RecordVideoScreenView from './RecordVideoScreenView';
import screens from '../../navigation/screens';


const mapDispatchToProps = {
  addVideo: videoOperations.addVideo,
};

const enhancer = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers({
    cameraType: Camera.Constants.Type.back,
    cameraRef: null,
    isRecording: false,
    isCameraReady: false,
    duration: 0,
    interval: null,
    fileUrl: null,
    videoName: '',
    isDoneRecording: false,
  }, {
    toggleCameraType: state => () => ({
      cameraType: state.cameraType === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front,
    }),
    setCameraRef: () => cameraRef => ({ cameraRef }),
    setCameraReady: () => () => ({ isCameraReady: true }),
    setDuration: state => value => ({ duration: state.duration + value }),
    setVideoName: () => videoName => ({ videoName }),
    setState: () => obj => obj,
  }),
  withHandlers({
    setVideoDuration: props => () => {
      const interval = setInterval(() => {
        props.setDuration(100);
      }, 100);

      props.setState({ interval, duration: 0 });
    },
    stopRecording: props => () => {
      if (props.isRecording) {
        props.cameraRef.stopRecording();
        props.setState({ isRecording: false });
        clearInterval(props.interval);
      }
    },
  }),
  withHandlers({
    onStartRecording: props => async () => {
      if (props.isCameraReady) {
        props.setState({ isRecording: true, fileUrl: null });
        props.setVideoDuration();
        props.cameraRef.recordAsync({ quality: '4:3' })
          .then((file) => {
            props.setState({ fileUrl: file.uri });
          });
      }
    },
    onEndRecording: props => () => {
      props.stopRecording();
      props.setState({ isDoneRecording: true });
    },
  }),
  withHandlers({
    toggleRecording: props => () => {
      if (props.isRecording) {
        props.onEndRecording();
      } else {
        props.onStartRecording();
      }
    },
    onSubmit: props => () => {
      if (props.videoName && props.fileUrl) {
        const videoItem = {
          id: uuid(),
          recordDate: moment().format(),
          title: props.videoName,
          videoUrl: props.fileUrl,
          duration: props.duration,
        };

        props.addVideo(videoItem);
        props.navigation.navigate(screens.LibraryTab);

        props.setState({
          videoName: '',
          isDoneRecording: false,
          duration: 0,
        });
      }
    },
    onCancelSave: props => () => {
      props.setState({
        videoName: '',
        isDoneRecording: false,
        duration: 0,
        fileUrl: null,
      });
    },
  }),
  lifecycle({
    componentWillUnmount() {
      if (this.props.isRecording) this.props.stopRecording();
    },
  }),
);

export default hoistStatics(enhancer)(RecordVideoScreenView);
