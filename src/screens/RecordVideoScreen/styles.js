import { StyleSheet } from 'react-native';
import { colors, fontSizes, dimensions } from '../../styles';
import { HEADER_HEIGHT } from '../../constants';

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
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  camera: {
    width: dimensions.width,
    height: (dimensions.width / 3) * 4,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  footer: {
    backgroundColor: colors.primaryColor,
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: (dimensions.width / 2) - 36,
  },
  left: {
    position: 'absolute',
    left: 20,
  },
  right: {
    position: 'absolute',
    right: 20,
  },
  duration: {
    color: colors.recordVideo.durationText,
    fontSize: fontSizes.big,
  },
  cancel: {
    color: colors.recordVideo.cancelText,
    fontSize: fontSizes.big,
    fontWeight: '500',
  },
  cancelCross: {
    position: 'absolute',
    left: 15,
    top: 24,
  },
  recordButton: {
    height: 72,
    width: 72,
    borderWidth: 5,
    borderColor: colors.recordVideo.recordButtonBorder,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  record: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.recordVideo.recording,
  },
  smallCircle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginRight: 2,
    backgroundColor: colors.recordVideo.recording,
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
