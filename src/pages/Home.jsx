import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import Sorting from '../components/Sorting';
import { fetchPizzas } from '../redux/reducers/pizzasReducer';

const Home = () => {
  const {
    pizzas,
    categories,
    sortings,
    allTypes,
    allSizes,
    activeCategoryId,
  } = useSelector((state) => ({
    pizzas: state.pizzasReducer.pizzas,
    categories: state.appReducer.allCategories,
    sortings: state.appReducer.allSortings,
    allTypes: state.appReducer.allTypes,
    allSizes: state.appReducer.allSizes,
    activeCategoryId: state.filtersReducer.activeCategoryId,
  }));

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPizzas(activeCategoryId));
  }, [activeCategoryId, dispatch]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategoryId={activeCategoryId}
            categories={categories}
          />
          <Sorting sortings={sortings} />
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
