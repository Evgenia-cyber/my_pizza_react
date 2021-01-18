import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSorting } from '../redux/reducers/filtersReducer';

const Sorting = ({ sorting, activeSortingType }) => {
  const dispatch = useDispatch();
  const onActiveSortingClick = () => {
    dispatch(setActiveSorting(sorting));
  };

  return (
    <li
      className={sorting.type === activeSortingType ? 'active' : ''}
      onClick={onActiveSortingClick}
    >
      {sorting.name}
    </li>
  );
};

export default Sorting;
