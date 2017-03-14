// export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
//
// export const updateBounds = (bounds) => ({
//   type: UPDATE_BOUNDS,
//   bounds
// });


import { fetchBenches } from './bench_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  // debugger;
  dispatch(changeFilter(filter, value));
  return fetchBenches(getState().filters)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
