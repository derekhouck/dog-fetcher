import { createAction } from 'redux-starter-kit';
import { AsyncStorage } from 'react-native';

const addFav = createAction('ADD_FAV');

const removeFav = createAction('REMOVE_FAV');

const setFavs = createAction('SET_FAVS');

const loadFavs = () => async (dispatch) => {
  try {
    const favs = await AsyncStorage.getItem('favs');
    favs === null ? favs = "[]" : favs;
    return dispatch(setFavs(JSON.parse(favs)));
  } catch (err) {
    console.error(err);
  }
};

const saveFavs = () => async (dispatch, getState) => {
  try {
    const favs = JSON.stringify(getState().favs);
    await AsyncStorage.setItem('favs', favs);
  } catch (err) {
    console.error(err);
  }
};

export {
  addFav,
  loadFavs,
  removeFav,
  saveFavs,
  setFavs,
};