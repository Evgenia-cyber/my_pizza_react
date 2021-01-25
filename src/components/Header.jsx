import React from 'react';
import { Link } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import Logo from './Logo';

const Header = ({ totalCount, totalPrice }) => {
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
