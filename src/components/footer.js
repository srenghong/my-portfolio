import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Gatsby = styled.span`
  color: #364f6b;
  text-decoration: none;

  :hover {
    color: #663399;
  }
`;

const Netlify = styled.span`
  color: #364f6b;
  text-decoration: none;

  :hover {
    color: #01c2b2;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className="footer">
      <p>
        Made with{' '}
        <Gatsby as="a" href="https://www.gatsbyjs.org" alt="Gatsby">
          Gatsby
        </Gatsby>{' '}
        and hosted on{' '}
        <Netlify as="a" href="https://app.netlify.com" alt="Netlify">
          Netlify
        </Netlify>
        .
      </p>
      <p id="me">
        &copy; {new Date().getFullYear()} {data.site.siteMetadata.author}
      </p>
    </footer>
  );
};

export default Footer;
