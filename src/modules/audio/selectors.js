import { createSelector } from 'reselect';
import R from 'ramda';

const getAllAudioIds = R.pathOr([], ['audio', 'audioItemsIds']);
const getAllAudioEntities = R.pathOr({}, ['audio', 'audioItems']);

export const getAllAudioItems = createSelector(
  [
    getAllAudioIds,
    getAllAudioEntities,
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

