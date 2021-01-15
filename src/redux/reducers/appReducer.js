import {
  fetchCategoriesAPI,
  fetchSizesAPI,
  fetchSortingsAPI,
  fetchTypesAPI,
} from '../../api/api';
import { fetchPizzas } from './pizzasReducer';

const INITIALIZE_SUCCESS = 'appReducer/INITIALIZE_SUCCESS';
const SET_CATEGORIES = 'appReducer/SET_CATEGORIES';
const SET_SORTINGS = 'appReducer/SET_SORTINGS';
const SET_TYPES = 'appReducer/SET_TYPES';
const SET_SIZES = 'appReducer/SET_SIZES';

const initialState = {
  allTypes: [],
  allSizes: [],
  allCategories: [],
  allSortings: [],
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, allCategories: action.payload };
    case SET_SORTINGS:
      return { ...state, allSortings: action.payload };
    case SET_TYPES:
      return { ...state, allTypes: action.payload };
    case SET_SIZES:
      return { ...state, allSizes: action.payload };
    case INITIALIZE_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZE_SUCCESS,
});
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setSortings = (sortings) => ({
  type: SET_SORTINGS,
  payload: sortings,
});
export const setTypes = (types) => ({ type: SET_TYPES, payload: types });
export const setSizes = (sizes) => ({ type: SET_SIZES, payload: sizes });

export const initializeApp = () => (dispatch) => {
  const pizzas = dispatch(fetchPizzas());
  const categories = fetchCategoriesAPI().then((categories) => {
    dispatch(setCategories(categories));
  });
  const sortings = fetchSortingsAPI().then((sortings) => {
    dispatch(setSortings(sortings));
  });
  const types = fetchTypesAPI().then((types) => {
    dispatch(setTypes(types));
  });
  const sizes = fetchSizesAPI().then((sizes) => {
    dispatch(setSizes(sizes));
  });

  Promise.all([pizzas, categories, sortings, types, sizes]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
