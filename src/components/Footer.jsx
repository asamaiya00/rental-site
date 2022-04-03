import React from 'react';
import blackLogo from '../assets/blackLogo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img id="logo" src={blackLogo} alt="Company Logo" />
        <p>© 2021 Company Name</p>
        <br />
        <p>All rights reserved</p>
      </div>
      <div className="links">
        <a href="#explore">Explore</a>
        <a href="#about-us">About us</a>
        <a href="#">Cities</a>
        <button className="btn call-btn">Call</button>
      </div>
    </footer>
  );
};

export default Footer;
