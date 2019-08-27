import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ page }) => (
  <header className="header">
    <div>
      <p>
        <Link to="/" className="logo">
          |S_H|
        </Link>
      </p>
    </div>
    <nav>
      <ul className="navbar-link">
        <li>
          <Link to="/about" className={page === 'about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" className={page === 'work' ? 'active' : ''}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className={page === 'contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
