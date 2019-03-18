import { combineReducers } from 'redux';

import auth from './auth';
import pokemons from './pokemon';
import types from './type';
import categories from './category';

const appReducer = combineReducers({
	auth,
	pokemons,
	types,
	categories
})

export default appReducer;