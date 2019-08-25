import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="header">
    <div>
      <p>
        <Link to="/" className="logo">
          Sreng.H
        </Link>
      </p>
    </div>
    <nav>
      <ul className="navbar-link">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
