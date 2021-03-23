import { SET_ACTIVE_TAB_ACTION, SET_FILTERS_CHECKED } from '../actions';

const initialState = {
  activeTab: 'cheaper',
  activeFilters: [false, false, true, true, false],
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_TAB_ACTION:
      return { ...state, activeTab: payload };

    case SET_FILTERS_CHECKED:
      return { ...state, activeFilters: payload };

    default:
      return state;
  }
};

export default filters;
