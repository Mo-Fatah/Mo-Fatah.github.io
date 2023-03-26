/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mohamed Abdelfatah</h2>
        <p><a href="mailto:mohamedabdelfatah2027@gmail.com">mohamedabdelfatah2027@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mohamed.
        I am a self-motivated software engineer with experience in developing and contributing to open source projects. 
        My passion lies in exploring distributed systems using modern technologies such as Rust, Go. I am passionate about solving complex problems and always eager to learn new things. 
        I thrive in collaborative environments where I can work with diverse teams to create innovative solutions. 
        In my free time, I enjoy contributing to open source projects and learning new programming languages and technologies.
        Feel free to explore my website!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
