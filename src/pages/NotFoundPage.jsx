import React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../assets/img/empty-cart.png';

const NotFoundPage = () => {
  return  <div className="content">
  <div className="container container--cart">
    <div className="cart cart--empty">
      <h2>Такой страницы не существует &#9888;</h2>
      <p>
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  </div>
</div>;
};

export default NotFoundPage;
