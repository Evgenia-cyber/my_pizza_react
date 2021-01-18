import * as axios from 'axios';

export const fetchPizzasAPI = (
  activeCategoryId = 0,
  activeFilter,
) => {
  return axios
    .get(
      `/pizzas?${
        activeCategoryId === 0 ? '' : `category=${activeCategoryId}`
      }&_sort=${activeFilter}&_order=asc`,
    )
    .then((response) => response.data);
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
