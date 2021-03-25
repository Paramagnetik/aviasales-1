import { SET_ACTIVE_TAB_ACTION, SET_FILTERS_CHECKED_ACTION, SET_ALL_FILTERS_CHECKED_ACTION } from '../actions';

const initialState = {
  activeTab: 'cheaper',
  isFilterAllChecked: false,
  filters: [
    { name: 'no-transfer', text: 'Без пересадок', active: false },
    { name: 'one-transfer', text: '1 пересадка', active: true },
    { name: 'two-transfer', text: '2 пересадки', active: true },
    { name: 'three-transfer', text: '3 пересадки', active: false },
  ],
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_TAB_ACTION:
      return { ...state, activeTab: payload };

    case SET_FILTERS_CHECKED_ACTION:
      return { ...state, filters: payload };

    case SET_ALL_FILTERS_CHECKED_ACTION:
      return { ...state, isFilterAllChecked: payload };

    default:
      return state;
  }
};

export default filters;
