import { combineReducers, createStore } from 'redux';

import pizzasReducer from '../redux/reducers/pizzasReducer';

const reducers = combineReducers({
  pizzasReducer,
});
const store = createStore(reducers);

export default store;
