import {
  START_LOADING_TICKETS_ACTION,
  STOP_LOADING_TICKETS_ACTION,
  SET_TICKETS_ACTION,
  TAKE_MORE_TICKETS,
} from '../actions';

const initialState = {
  isLoading: false,
  tickets: [],
  stop: false,
  ticketsShown: 5,
};

const tickets = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING_TICKETS_ACTION:
      return { ...state, isLoading: true };

    case STOP_LOADING_TICKETS_ACTION:
      return { ...state, isLoading: false, stop: payload };

    case SET_TICKETS_ACTION:
      return { ...state, tickets: [...state.tickets, ...payload] };

    case TAKE_MORE_TICKETS:
      return { ...state, ticketsShown: state.ticketsShown + 5 };

    default:
      return state;
  }
};

export default tickets;
