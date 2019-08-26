import React from 'react';
import PropTypes from 'prop-types';

const emoji = {
  hello: '👋',
  graduation: '👨‍🎓',
  france: '🇫🇷',
  working: '👨‍💻',
  sport: '⚽',
  music: '🎵',
  game: '🎮',
  web: '💻',
  mobile: '📱',
};

const Emoji = ({ name }) => (
  <span role="img" aria-label={name} title={name} className={name}>
    {emoji[name]}
  </span>
);

Emoji.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Emoji;
