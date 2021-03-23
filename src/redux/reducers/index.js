import { combineReducers } from 'redux';
import tickets from './tickets';
import filters from './filters';
import searchId from './searchId';

export default combineReducers({
  tickets,
  filters,
  searchId,
});
