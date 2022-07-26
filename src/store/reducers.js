import { combineReducers } from 'redux';
import loading from './loading/reducers';

const rootReducer = combineReducers({
  loading
});

export default rootReducer;
