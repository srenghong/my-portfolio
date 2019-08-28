import React from 'react';
import { Link } from 'gatsby';
import './index.scss';

import Layout from '../components/layout';
import Emoji from '../components/emoji';

const IndexPage = () => (
  <Layout className="home">
    <>
      <p id="hello">Hello,</p>
      <div id="bio">
        <p>
          I am Sreng, a web developer, from Phnom Penh, Cambodia. Nice to meet
          you!
        </p>
      </div>
      <div id="objective">
        <p>
          I am a passionate looking to make an impact in this world. I build
          website and web application, and I love what I do.
        </p>
      </div>
      <div id="sayHello">
        <Link to="/contact">
          Say Hello <Emoji name="wave" />
        </Link>
      </div>
    </>
  </Layout>
);

export default IndexPage;
