import React from 'react';

import Layout from '../components/layout';
import Emoji from '../components/emoji';
import coverPhoto from '../images/cover-photo.png';

const AboutPage = () => (
  <Layout className="about">
    <>
      <div>
        <img src={coverPhoto} alt="Cover" />
      </div>
      <div className="story">
        <p className="head">
          Hey there, I&apos;m Sreng. Currenlty living and working in Nice,
          France.
        </p>
        <p>
          After my <Emoji name="graduation" /> from Polytech Lille, I have
          started working as a front-end developer at one software company.
        </p>
        <p>
          I love <Emoji name="working" /> with JavaScript since there are many
          choices to choose regarding front/back-end technologies. However, I am
          always curious to learn something new. For instance, lately I have
          been learning Flutter by Google.
        </p>
        <p>
          For my free time, I like to collaborate with my friends to create an{' '}
          <Emoji name="web" />/<Emoji name="mobile" /> application which can
          improve Cambodia&apos;s society, apart from that I am interested in{' '}
          <Emoji name="sport" />, <Emoji name="music" /> and{' '}
          <Emoji name="game" />.
        </p>
      </div>
      <p className="head">Skills</p>
      <div className="skill">
        <div>
          <p className="sub-head">Front-end</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </div>
        <div>
          <p className="sub-head">JavaScript</p>
          <ul>
            <li>ES6</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Typescript</li>
            <li>Gatsby.js</li>
          </ul>
        </div>
        <div>
          <p className="sub-head">Server-side</p>
          <ul>
            <li>Docker</li>
            <li>Java</li>
            <li>Laravel</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <p className="sub-head">Currenlty learning</p>
          <ul>
            <li>React (advance)</li>
            <li>Gatsby</li>
            <li>GraphQL</li>
            <li>Flutter</li>
            <li>PWA</li>
            <li>and many more</li>
          </ul>
        </div>
      </div>
    </>
  </Layout>
);

export default AboutPage;
