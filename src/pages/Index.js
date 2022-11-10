import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mohamed Abdelfatah's personal website."}
  >
    <article className="post" id="index">
      <p> Welcome to my website. Please feel free to read more <Link to="/about"><b>about me</b></Link>,
        or you can check out my {' '}
        <Link to="/resume"><b>resume</b></Link>, {' '}
        <Link to="/projects"><b>projects</b></Link>, {' '}
        view <Link to="/stats"><b>site statistics</b></Link>, {' '}
        or <Link to="/contact"><b>contact</b></Link> me.
      </p>
    </article>
    <p> Source code available <a href="https://github.com/Mo-Fatah/Mo-Fatah.github.io">here</a>.</p>
  </Main>
);

export default Index;
