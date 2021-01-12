import React from 'react';
import { Link } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/cart">
          <HeaderCartButton />
        </Link>
      </div>
    </div>
  );
};

export default Header;
