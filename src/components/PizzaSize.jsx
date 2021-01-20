import React from 'react';
import classNames from 'classnames';

const PizzaSize = ({ size, sizes, activeSize, onSizeClick }) => {
  return (
    <li
      className={classNames({
        active: size === activeSize,
        disabled: !sizes.includes(size),
      })}
      onClick={() => {
        onSizeClick(size);
      }}
    >
      {size}
    </li>
  );
};

export default PizzaSize;
