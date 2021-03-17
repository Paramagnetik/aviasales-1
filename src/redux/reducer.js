import {
  SET_ACTIVE_TAB_ACTION,
  SET_SEARCH_ID_ACTION,
  SET_TICKETS_ACTION,
  START_LOADING_TICKETS_ACTION,
  STOP_LOADING_TICKETS_ACTION,
  TAKE_MORE_TICKETS,
  SET_FILTERS_CHECKED,
  SET_TRANSFERS_ACTION,
} from './actions';

export const initialState = {
  isLoading: false,
  tickets: [],
  activeTab: 'cheaper',
  searchId: null,
  stop: false,
  take: 5,
  transfers: [1, 2],
  activeFilters: [false, false, true, true, false],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING_TICKETS_ACTION:
      return { ...state, isLoading: true };

    case SET_SEARCH_ID_ACTION:
      return { ...state, searchId: payload };

    case STOP_LOADING_TICKETS_ACTION:
      return { ...state, isLoading: false, stop: payload };

    case SET_TICKETS_ACTION:
      return { ...state, tickets: [...state.tickets, ...payload] };

    case SET_ACTIVE_TAB_ACTION:
      return { ...state, activeTab: payload };

    case TAKE_MORE_TICKETS:
      return { ...state, take: payload };

    case SET_FILTERS_CHECKED:
      return { ...state, activeFilters: payload };

    case SET_TRANSFERS_ACTION:
      return { ...state, transfers: payload };

    default:
      return state;
  }
};

export default reducer;
