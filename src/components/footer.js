import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
      <p>Made with Gatsby and hosted on Netlify.</p>
      <p id="me">
        &copy; {new Date().getFullYear()} {data.site.siteMetadata.author}
      </p>
    </footer>
  );
};

export default Footer;
