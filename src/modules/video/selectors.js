import { createSelector } from 'reselect';
import R from 'ramda';

const getAllVideoIds = R.pathOr([], ['video', 'videoItemsIds']);
const getAllVideoEntities = R.pathOr({}, ['video', 'videoItems']);

export const getAllVideoItems = createSelector(
  [
    getAllVideoIds,
    getAllVideoEntities,
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

