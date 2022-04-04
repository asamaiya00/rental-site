import React from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import down from '../assets/down.svg';
import menu from '../assets/menu.svg';

const Header = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMenu = () => {
    document.getElementById('links').classList.toggle('show');
  };
  return (
    <header>
      <nav>
        <img id="logo" src={logo} alt="Company Logo" />
        <div id="links" className="links">
          <a href="#explore">Explore</a>
          <a href="#about-us">About us</a>
          <a href="#">Cities</a>
          <button className="btn btn-call" style={{ color: 'white' }}>
            Call
          </button>
        </div>
        <img onClick={toggleMenu} id="menu" src={menu} alt="mobile menu" />
      </nav>
      <h1> Rethink your living & renting</h1>
      <h3>Make your stay painless with us</h3>
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="form-input">
            <label htmlFor="city">City</label>
            <input name="city" type="text" placeholder="Select your city" />
          </div>
          <div className="form-input">
            <label htmlFor="dates">Dates</label>
            <input name="dates" type="date" placeholder="Select your dates" />
          </div>
          <div className="form-input">
            <label htmlFor="guests">Guests</label>
            <input name="guests" type="text" placeholder="Add guests" />
          </div>
          <button className="btn btn-search btn-gradient">
            <img src={search} alt="" />
            Search
          </button>
        </div>
      </form>
      <a href="#explore" style={{ marginBottom: '15px', textAlign: 'center' }}>
        <img src={down} height="30px" alt="down arrow" />
      </a>
    </header>
  );
};

export default Header;
