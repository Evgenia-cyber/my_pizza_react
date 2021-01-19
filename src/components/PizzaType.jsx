import React from 'react';
import classNames from 'classnames';

const PizzaType = ({ type, activeType, onTypeClick, types }) => {
  return (
    <li
      className={classNames({
        active: activeType === type,
        disabled: !types.includes(type),
      })}
      onClick={() => {onTypeClick(type)}}
    >
      {type}
    </li>
  );
};

export default PizzaType;
