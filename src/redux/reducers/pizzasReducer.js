import * as axios from 'axios';

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
  axios.get('/pizzas').then((response) => {
    return dispatch(setPizzas(response.data));
  });
};

export default pizzasReducer;
