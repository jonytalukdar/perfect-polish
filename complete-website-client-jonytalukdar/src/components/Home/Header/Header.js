import React from 'react';
import Banner from './Banner/Banner';
import './Header.css';

import Navigation from './Navigation/Navigation';
const Header = () => {
  return (
    <div className="header">
      <Navigation></Navigation>
    </div>
  );
};

export default Header;
