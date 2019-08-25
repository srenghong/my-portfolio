import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className }) => (
  <div className="container">
    <Header />
    <main className={className}>
      <div>{children}</div>
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.element.isRequired,
};

export default Layout;
