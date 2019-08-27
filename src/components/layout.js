import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

const Layout = ({ children, className }) => (
  <div className="container">
    <Header page={className} />
    <main className={className}>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default Layout;
