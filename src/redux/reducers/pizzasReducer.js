import { fetchPizzasAPI } from '../../api/api';

const SET_PIZZAS = 'pizzaReducer/SET_PIZZAS';

const initialState = {
  pizzas: [],
  isLoaded: false,
  allTypes: ['тонкое', 'традиционное'],
  allSizes: [26, 30, 40],
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload };

    default:
      return state;
  }
};

export const setPizzas = (pizzas) => ({ type: SET_PIZZAS, payload: pizzas });

export const fetchPizzas = () => (dispatch) => {
  fetchPizzasAPI()
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
