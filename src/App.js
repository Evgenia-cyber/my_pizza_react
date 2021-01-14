import * as axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { setPizzas } from './redux/reducers/pizzasReducer';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('/pizzas').then((response) => dispatch(setPizzas(response.data)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
export default App;
