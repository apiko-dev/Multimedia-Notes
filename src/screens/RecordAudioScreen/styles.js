import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '../../constants';
import { colors, fontSizes, dimensions } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  durationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  recordingText: {
    color: colors.primaryColor,
    fontSize: 30,
    fontWeight: '700',
  },
  durationText: {
    color: colors.secondaryColor,
    fontSize: 50,
    fontWeight: '300',
  },
  recordButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.audio.recording,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startRecordButton: {
    marginTop: '25%',
  },
  recordingBackground: {
    backgroundColor: colors.audio.recordingBackground,
  },
  playBackground: {
    backgroundColor: colors.audio.playButtonBackground,
  },

  recordIcon: {
    justifyContent: 'center',
  },
  cancelCross: {
    position: 'absolute',
    left: 15,
    top: 24,
  },
  inputStyle: {
    marginTop: HEADER_HEIGHT,
    paddingBottom: 5,
    color: colors.primaryColor,
    fontSize: fontSizes.big,
    fontWeight: '600',
    textAlign: 'center',
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryColor,
  },
  submitText: {
    fontSize: fontSizes.big,
    fontWeight: '600',
    color: colors.white,
  },
  submitButton: {
    marginTop: 25,
    height: 50,
    width: dimensions.width / 2,
    backgroundColor: colors.primaryColor,
    borderRadius: 25,
  },
});

export default styles;
