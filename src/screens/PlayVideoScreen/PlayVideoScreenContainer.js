import { compose, withStateHandlers, hoistStatics } from 'recompose';
import { paramsToProps } from '../../utils/enhancers';
import PlayVideoScreenView from './PlayVideoScreenView';

const defaultState = {
  isError: false,
  isLoading: false,
  isPlaying: false,
};

const enhance = compose(
  paramsToProps('videoUrl'),
  withStateHandlers({
    ...defaultState,
    isLoading: true,
  }, {
    onError: () => () => ({ ...defaultState, isError: true }),
    onLoad: () => () => defaultState,
    onTogglePlaying: ({ isPlaying }) => () => ({ ...defaultState, isPlaying: !isPlaying }),
  }),
);

export default hoistStatics(enhance)(PlayVideoScreenView);
