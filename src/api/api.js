import * as axios from 'axios';

export const fetchPizzasAPI = () => {
  return axios.get('/pizzas').then((response) => response.data);
};
