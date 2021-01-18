import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/reducers/filtersReducer';

const Category = ({ name, index, activeCategoryId }) => {
  const dispatch = useDispatch();
  const onActiveCategoryClick = () => {
    dispatch(setActiveCategory(index));
  };

  return (
    <li
      className={index === activeCategoryId ? 'active' : ''}
      onClick={onActiveCategoryClick}
    >
      {name}
    </li>
  );
};

export default Category;
