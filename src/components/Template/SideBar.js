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
      <p>Hi, I&apos;m Mohamed. I love building things.
        I have a great passion towards Backend Systems, Infrastructure and Networking.
        I have a decent experience in Rust, Java, MERN stack and other tech stacks.
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
