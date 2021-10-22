import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/">Home</Link>
      </li>
      <li className="navigation__item">
        <Link to="/products">Products</Link>
      </li>
    </ul>
  );
}
export default Navigation;
