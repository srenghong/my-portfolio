import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faTwitter,
  faLinkedin,
  faDev,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';

const ContactPage = () => (
  <Layout className="contact">
    <>
      <p className="head">Don&apos;t be a stranger, just say hello!</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGoogle} />{' '}
          <a href="mailto:srenghong21@gmail.com" className="link">
            srenghong21@gmail.com
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />{' '}
          <a href="https://github.com/srenghong" className="link">
            github.com/srenghong
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{' '}
          <a href="https://www.linkedin.com/in/srenghong" className="link">
            linkedin.com/in/srenghong
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <a href="https://twitter.com/srenghong21" className="link">
            twitter.com/srenghong21
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faDev} />{' '}
          <a href="https://dev.to/srenghong" className="link">
            dev.to/srenghong
          </a>
        </li>
      </ul>
    </>
  </Layout>
);

export default ContactPage;
