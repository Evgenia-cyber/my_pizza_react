import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import pizzasReducer from '../redux/reducers/pizzasReducer';
import appReducer from '../redux/reducers/appReducer';
import filtersReducer from '../redux/reducers/filtersReducer';
import cartReducer from '../redux/reducers/cartReducer';

const reducers = combineReducers({
  pizzasReducer,
  appReducer,
  filtersReducer,
  cartReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
