import { fetchPizzasAPI } from '../../api/api';

const SET_PIZZAS = 'pizzaReducer/SET_PIZZAS';
const IS_LOADED_PIZZAS = 'pizzaReducer/IS_LOADED_PIZZAS';

const initialState = {
  pizzas: [],
  isLoadedPizzas: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload };
    case IS_LOADED_PIZZAS:
      return { ...state, isLoadedPizzas: action.payload };

    default:
      return state;
  }
};

export const setPizzas = (pizzas) => ({ type: SET_PIZZAS, payload: pizzas });
export const isLoadedPizzas = (boolean) => ({
  type: IS_LOADED_PIZZAS,
  payload: boolean,
});

export const fetchPizzas = (activeCategoryId, activeFilter) => (dispatch) => {
  dispatch(isLoadedPizzas(false));
  fetchPizzasAPI(activeCategoryId, activeFilter)
    .then((pizzas) => {
      dispatch(isLoadedPizzas(true));
      dispatch(setPizzas(pizzas));
    })
    .catch((error) => alert(error));
};
// export const fetchPizzas = () => async (dispatch) => {
//   try {
//     const pizzas = await fetchPizzasAPI();
//     dispatch(setPizzas(pizzas));
//   } catch (error) {
//     alert(error);
//   }
// };

export default pizzasReducer;
