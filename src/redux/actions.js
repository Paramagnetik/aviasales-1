import AviasalesDBService from '../api/avisalesDBApi';

const { getSearchId, getTickets } = new AviasalesDBService();

export const STOP_LOADING_TICKETS_ACTION = 'STOP_LOADING_TICKETS_ACTION';
export const stopLoadingTicketsAction = (payload) => ({
  type: STOP_LOADING_TICKETS_ACTION,
  payload,
});

export const START_LOADING_TICKETS_ACTION = 'START_LOADING_TICKETS_ACTION';
export const startLoadingTicketsAction = () => ({
  type: START_LOADING_TICKETS_ACTION,
});

export const SET_SEARCH_ID_ACTION = 'SET_SEARCH_ID_ACTION';
export const setSearchIdAction = (payload) => ({
  type: SET_SEARCH_ID_ACTION,
  payload,
});

export const SET_TICKETS_ACTION = 'SET_TICKET_ACTION';
export const setTicketsAction = (payload) => ({
  type: SET_TICKETS_ACTION,
  payload,
});

export const SET_ACTIVE_TAB_ACTION = 'SET_ACTIVE_TAB';
export const setActiveTabAction = (payload) => ({
  type: SET_ACTIVE_TAB_ACTION,
  payload,
});

export const TAKE_MORE_TICKETS = 'TAKE_MORE_TICKETS';
export const takeMoreTicketsActions = () => ({
  type: TAKE_MORE_TICKETS,
});

export const SET_FILTERS_CHECKED = 'SET_FILTERS_CHECKED';
export const setFilterCheckedAction = (payload) => ({
  type: SET_FILTERS_CHECKED,
  payload,
});

export const getSearchIdThunk = () => async (dispatch) => {
  const { searchId } = await getSearchId();
  dispatch(setSearchIdAction(searchId));
};

export const getTicketsThunk = (searchId) => async (dispatch) => {
  dispatch(startLoadingTicketsAction());
  const [tickets, stop] = await getTickets(searchId);
  if (!stop) {
    dispatch(setTicketsAction(tickets));
  } else {
    dispatch(stopLoadingTicketsAction(stop));
  }
};
