import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
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
