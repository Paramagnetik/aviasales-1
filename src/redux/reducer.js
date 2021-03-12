import {
  SET_ACTIVE_TAB_ACTION,
  SET_ERROR_ACTION,
  SET_SEARCH_ID_ACTION,
  SET_TICKETS_ACTION,
  START_LOADING_TICKETS_ACTION,
  STOP_LOADING_TICKETS_ACTION,
} from './actions';

export const initialState = {
  isLoading: false,
  isError: false,
  tickets: [],
  activeTab: 'cheaper',
  searchId: null,
  stop: false,
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
      return { ...state, tickets: payload };

    case SET_ACTIVE_TAB_ACTION:
      return { ...state, activeTab: payload };

    case SET_ERROR_ACTION:
      return { ...state, isError: true };

    default:
      return state;
  }
};

export default reducer;
