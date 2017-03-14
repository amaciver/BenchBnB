import {UPDATE_FILTER} from '../actions/filter_actions';
import {merge} from 'lodash';


const _defaultFilters = Object.freeze({
  bounds: {},
  minSeating: 1,
  maxSeating: 10
});

const FilterReducer = (state=_defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    // debugger;
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};


export default FilterReducer;
