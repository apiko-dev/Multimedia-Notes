import { handleActions } from 'redux-actions';
import R from 'ramda';
import * as types from './types';

import { mergeIn } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  videoItemsIds: [],
  videoItems: {
    // [id]: {
    //    id: string,
    //    title: string,
    //    recordDate: string date,
    //    duration: number,
    //    videoUrl: string,
    // }
  },

};

export default handleActions({
  [types.ADD_VIDEO]: mergeIn((action, state) => ({
    videoItemsIds: [action.payload.id].concat(state.videoItemsIds),
    videoItems: {
      ...state.videoItems,
      [action.payload.id]: action.payload,
    },
  })),

  [types.REMOVE_VIDEO]: mergeIn((action, state) => ({
    videoItemsIds: state.videoItemsIds.filter(i => action.payload !== i),
    videoItems: R.omit([action.payload], state.videoItems),
  })),
}, INITIAL_STATE);
