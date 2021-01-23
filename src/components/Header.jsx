import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import Logo from './Logo';

const Header = () => {
  const { totalCount, totalPrice } = useSelector((state) => ({
    totalCount: state.cartReducer.totalCount,
    totalPrice: state.cartReducer.totalPrice,
  }));
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <Link to={totalPrice === 0 ? '/empty' : '/cart'}>
          <HeaderCartButton totalCount={totalCount} totalPrice={totalPrice} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
