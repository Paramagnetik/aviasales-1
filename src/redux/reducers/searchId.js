import { SET_SEARCH_ID_ACTION } from '../actions';

const initialState = {
  searchId: null,
};

const searchId = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_ID_ACTION:
      return { ...state, searchId: payload };

    default:
      return state;
  }
};

export default searchId;
