import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const dimensions = {
  indent: 24,
  halfIndent: 12,
  width,
  height,
};

export default dimensions;
