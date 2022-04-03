import React from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <img id="logo" src={logo} alt="Company Logo" />
        <div className="links">
          <a href="#explore">Explore</a>
          <a href="#about-us">About us</a>
          <a href="#">Cities</a>
          <button className="btn call-btn" style={{ color: 'white' }}>
            Call
          </button>
        </div>
      </nav>
      <h1> Rethink your living & renting</h1>
      <h2>Make your stay painless with us</h2>
      <form>
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
          <button className="btn btn-search">
            <img src={search} alt="" />
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
