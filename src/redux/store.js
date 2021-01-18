import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import pizzasReducer from '../redux/reducers/pizzasReducer';
import appReducer from '../redux/reducers/appReducer';
import filtersReducer from '../redux/reducers/filtersReducer';

const reducers = combineReducers({
  pizzasReducer,
  appReducer,
  filtersReducer
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
