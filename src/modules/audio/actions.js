import { createAction } from 'redux-actions';
import * as types from './types';

export const addAudio = createAction(types.ADD_AUDIO);
export const removeAudio = createAction(types.REMOVE_AUDIO);

