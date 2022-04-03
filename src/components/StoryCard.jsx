import React from 'react';

const StoryCard = ({ bgUrl, chapter }) => {
  return (
    <div className="story">
      <img src={bgUrl} width="100%" alt="Story chapter" />
      <div className="info-panel">
        <div className="info">
          <h4>Chapter {chapter}</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, at,
            molestiae laboriosam
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
