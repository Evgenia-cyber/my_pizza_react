import React from 'react';
import { useDispatch } from 'react-redux';

import PizzaSize from './PizzaSize';
import PizzaType from './PizzaType';
import { addPizzaToCart } from '../redux/reducers/cartReducer';

const Pizza = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  allTypes,
  allSizes,
  countPizzasInGroup,
}) => {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const dispatch = useDispatch();
  const onTypeClick = (type) => {
    setActiveType(type);
  };
  const onSizeClick = (size) => {
    setActiveSize(size);
  };
  const onAddToCartClick = () => {
    const pizza = {
      id,
      imageUrl,
      name,
      price,
      activeType,
      activeSize,
    };
    const countPizzasInGroupObject = {
      id,
    };
    dispatch(addPizzaToCart(pizza, countPizzasInGroupObject));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {allTypes?.map((type) => (
            <PizzaType
              key={type}
              activeType={activeType}
              type={type}
              onTypeClick={onTypeClick}
              types={types}
            />
          ))}
        </ul>
        <ul>
          {allSizes &&
            allSizes.map((size) => (
              <PizzaSize
                key={size}
                activeSize={activeSize}
                size={size}
                sizes={sizes}
                onSizeClick={onSizeClick}
              />
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {price} руб.</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={onAddToCartClick}>Добавить</span>
          {countPizzasInGroup !== 0 && <i>{countPizzasInGroup}</i>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Pizza);
