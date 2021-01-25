import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import EmptyCart from './pages/EmptyCart';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { initializeApp } from './redux/reducers/appReducer';

const App = () => {
  const {
    pizzas,
    isLoadedPizzas,
    categories,
    sortings,
    allTypes,
    allSizes,
    activeCategoryId,
    activeSorting,
    countPizzasInGroup,
    sortedItems,
    totalCount,
    totalPrice,
  } = useSelector((state) => ({
    pizzas: state.pizzasReducer.pizzas,
    isLoadedPizzas: state.pizzasReducer.isLoadedPizzas,
    categories: state.appReducer.allCategories,
    sortings: state.appReducer.allSortings,
    allTypes: state.appReducer.allTypes,
    allSizes: state.appReducer.allSizes,
    activeCategoryId: state.filtersReducer.activeCategoryId,
    activeSorting: state.filtersReducer.activeSorting,
    countPizzasInGroup: state.cartReducer.countPizzasInGroup,
    sortedItems: state.cartReducer.sortedItems,
    totalCount: state.cartReducer.totalCount,
    totalPrice: state.cartReducer.totalPrice,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initializeApp(0, 'rating'));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header totalCount={totalCount} totalPrice={totalPrice} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              pizzas={pizzas}
              isLoadedPizzas={isLoadedPizzas}
              categories={categories}
              sortings={sortings}
              allTypes={allTypes}
              allSizes={allSizes}
              activeCategoryId={activeCategoryId}
              activeSorting={activeSorting}
              countPizzasInGroup={countPizzasInGroup}
            />
          )}
        />
        <Route path="/cart" exact>
          {totalPrice === 0 ? (
            <Redirect to="/empty" />
          ) : (
            <Cart
              sortedItems={sortedItems}
              totalCount={totalCount}
              totalPrice={totalPrice}
            />
          )}
        </Route>
        <Route path="/empty" exact component={EmptyCart} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
export default App;
