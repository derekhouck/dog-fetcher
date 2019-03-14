import { combineReducers } from 'redux-starter-kit';
import favsReducer from './favsReducer';

const rootReducer = combineReducers({
  favs: favsReducer,
});

export default rootReducer;