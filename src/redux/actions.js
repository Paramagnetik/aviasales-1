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

export const SET_ERROR_ACTION = 'SET_ERROR_ACTION';
export const setErrorAction = () => ({
  type: SET_ERROR_ACTION,
});

export const getSearchIdThunk = () => async (dispatch) => {
  const { searchId } = await getSearchId();
  dispatch(setSearchIdAction(searchId));
};

// export const getTicketsThunk = (searchId) => async dispatch => {
//   dispatch(startLoadingTicketsAction());
//   const { tickets, stop } = await getTickets(searchId);
//   dispatch(setTicketsAction(tickets));
//   dispatch(stopLoadingTicketsAction(stop));
// }

export const getTicketsThunk = (searchId) => (dispatch) => {
  dispatch(startLoadingTicketsAction());
  getTickets(searchId).then((data) => {
    dispatch(setTicketsAction(data.tickets));
    dispatch(stopLoadingTicketsAction(data.stop));
  });
};
