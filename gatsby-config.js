const metadata = require('./config/metadata');

const pathPrefix = metadata.pathPrefix === '/' ? '' : metadata.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: metadata.pathPrefix,
  siteMetadata: {
    siteUrl: metadata.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: metadata.title,
    titleAlt: metadata.titleAlt,
    description: metadata.description,
    banner: metadata.logo,
    headline: metadata.headline,
    siteLanguage: metadata.siteLanguage,
    ogLanguage: metadata.ogLanguage,
    author: metadata.author,
    twitter: metadata.twitter,
    facebook: metadata.facebook,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
  ],
};
