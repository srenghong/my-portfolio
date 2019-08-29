import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.scss';

import Header from './header';
import Footer from './footer';
import SEO from './SEO/seo';

const Layout = ({ children, className }) => (
  <div className="container">
    <SEO />
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
