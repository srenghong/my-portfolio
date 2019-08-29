import React from 'react';
import { Link } from 'gatsby';

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
          I am passionate about web development and looking to make an impact in
          this world. I build beautiful, functional and user-friendly website
          and web application. I believe &quot;The only way to do great work is
          to love what you do.&quot; by Steve Jobs.
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
