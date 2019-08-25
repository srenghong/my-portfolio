import React from 'react';
import './index.scss';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div id="bio">
      <p id="hello">Hello,</p>
      <p>
        I am Sreng, a web developer, from Phnom Penh, Cambodia. Nice to meet
        you!
      </p>
    </div>
    <div id="objective">
      <p>I build website and web application, and I love what I do.</p>
    </div>
    <div id="sayHello">
      <Link to="/contact">Say Hello</Link>
    </div>
  </Layout>
);

export default IndexPage;
