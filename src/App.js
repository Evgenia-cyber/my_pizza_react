import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import EmptyCart from './pages/EmptyCart';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { initializeApp } from './redux/reducers/appReducer';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initializeApp(0, 'rating'));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/empty" exact component={EmptyCart} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
export default App;
