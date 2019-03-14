import { createReducer } from 'redux-starter-kit';

const favsReducer = createReducer([], {
  'ADD_FAV': (state, action) => {
    state.push(action.payload);
  },
  'REMOVE_FAV': (state, action) => {
    return state.filter(dog => dog !== action.payload);
  },
});

export default favsReducer;