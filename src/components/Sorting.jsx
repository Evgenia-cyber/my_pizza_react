import React from 'react';

const Sorting = ({ sorting, activeSortingType,onSortingClick }) => {

  return (
    <li
      className={sorting.type === activeSortingType ? 'active' : ''}
      onClick={()=>{onSortingClick(sorting)}}
    >
      {sorting.name}
    </li>
  );
};

export default Sorting;
