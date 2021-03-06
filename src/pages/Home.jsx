import React from 'react';
import { useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import PizzaLoader from '../components/PizzaLoader';
import Sortings from '../components/Sortings';
import { fetchPizzas } from '../redux/reducers/pizzasReducer';

const Home = ({
  pizzas,
  isLoadedPizzas,
  categories,
  sortings,
  allTypes,
  allSizes,
  activeCategoryId,
  activeSorting,
  countPizzasInGroup,
}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPizzas(activeCategoryId, activeSorting.type));
  }, [activeCategoryId, activeSorting.type, dispatch]);

  return (
    <div className="content">
      <div className="container">
        {isLoadedPizzas && (
          <div className="content__top">
            <Categories
              activeCategoryId={activeCategoryId}
              categories={categories}
            />
            <Sortings activeSorting={activeSorting} sortings={sortings} />
          </div>
        )}
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoadedPizzas
            ? pizzas &&
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
                  countPizzasInGroup={
                    countPizzasInGroup.filter((item) => pizza.id === item.id)
                      .length
                  }
                />
              ))
            : new Array(6)
                .fill(' ')
                .map((_, index) => <PizzaLoader key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
