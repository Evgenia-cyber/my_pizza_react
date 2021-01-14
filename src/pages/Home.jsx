import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import Sort from '../components/Sort';

const Home = () => {
  const { pizzas } = useSelector((state) => ({
    pizzas: state.pizzasReducer.pizzas,
  }));

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas &&
            pizzas.map((pizza) => (
              <Pizza
                key={pizza.id}
                id={pizza.id}
                imageUrl={pizza.imageUrl}
                name={pizza.name}
                types={pizza.types}
                sizes={pizza.sizes}
                price={pizza.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
