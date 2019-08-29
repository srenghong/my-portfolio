import React from 'react';
import PropTypes from 'prop-types';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../styles/global.scss';

import Header from './header';
import Footer from './footer';
import SEO from './SEO/seo';

config.autoAddCss = false;

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
