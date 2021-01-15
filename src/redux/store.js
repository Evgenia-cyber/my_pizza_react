import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import pizzasReducer from '../redux/reducers/pizzasReducer';

const reducers = combineReducers({
  pizzasReducer,
});
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
