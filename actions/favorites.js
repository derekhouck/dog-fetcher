import { createAction } from 'redux-starter-kit';

const addFav = createAction('ADD_FAV');

const removeFav = createAction('REMOVE_FAV');

export {
  addFav,
  removeFav,
};