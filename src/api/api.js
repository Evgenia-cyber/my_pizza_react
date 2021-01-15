import * as axios from 'axios';

export const fetchPizzasAPI = () => {
  return axios.get('/pizzas').then((response) => response.data);
};

export const fetchCategoriesAPI = () => {
  return axios.get('/allCategories').then((response) => response.data);
};

export const fetchSortingsAPI = () => {
  return axios.get('/allSortings').then((response) => response.data);
};

export const fetchTypesAPI = () => {
  return axios.get('/allTypes').then((response) => response.data);
};

export const fetchSizesAPI = () => {
  return axios.get('/allSizes').then((response) => response.data);
};
