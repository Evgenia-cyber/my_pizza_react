import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import Sorting from '../components/Sorting';

const Home = () => {
  const { pizzas, categories, sortings, allTypes, allSizes } = useSelector(
    (state) => ({
      pizzas: state.pizzasReducer.pizzas,
      categories: state.appReducer.allCategories,
      sortings: state.appReducer.allSortings,
      allTypes: state.appReducer.allTypes,
      allSizes: state.appReducer.allSizes,
    }),
  );

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories categories={categories}/>
          <Sorting sortings={sortings}/>
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
                allTypes={allTypes}
                allSizes={allSizes}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
