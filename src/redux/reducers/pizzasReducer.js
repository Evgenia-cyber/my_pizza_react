import { fetchPizzasAPI } from '../../api/api';

const SET_PIZZAS = 'pizzaReducer/SET_PIZZAS';

const initialState = {
  pizzas: [],
  isLoadedPizzas: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload, isLoadedPizzas: true };

    default:
      return state;
  }
};

export const setPizzas = (pizzas) => ({ type: SET_PIZZAS, payload: pizzas });

export const fetchPizzas = (activeCategoryId,activeFilter) => (dispatch) => {
  fetchPizzasAPI(activeCategoryId,activeFilter)
    .then((pizzas) => {
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
