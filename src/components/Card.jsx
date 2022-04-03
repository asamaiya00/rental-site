import React from 'react';

const Card = ({ bgUrl, title, area, price }) => {
  return (
    <div className="card-container">
      <div
        className="card"
        style={{ backgroundImage: 'url(' + bgUrl + ')' }}
      ></div>
      <div className="info-panel">
        <div className="info">
          <h5>{title}</h5>
          <button className="btn btn-gradient btn-info">{price}$</button>
          <button className="btn btn-gradient btn-info">{area}м²</button>
        </div>
        <button className="btn btn-gradient btn-book">Book!</button>
      </div>
    </div>
  );
};

export default Card;
