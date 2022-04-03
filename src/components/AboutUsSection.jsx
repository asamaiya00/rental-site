import React from 'react';
import StoryCard from '../components/StoryCard';
import chapter1 from '../assets/chapter1.png';
import chapter2 from '../assets/chapter2.png';
import chapter3 from '../assets/chapter3.jpg';
import chapter4 from '../assets/chapter4.jpg';

const AboutUsSection = () => {
  return (
    <section id="about-us">
      <h2>About Us</h2>
      <h5>Allow us to tell you a short story...</h5>
      <div className="chapters-gallery">
        <div className="story-container">
          <StoryCard chapter={'I'} bgUrl={chapter1} />
          <StoryCard chapter={'II'} bgUrl={chapter3} />
        </div>
        <div className="story-container">
          <StoryCard chapter={'III'} bgUrl={chapter2} />
          <StoryCard chapter={'IV'} bgUrl={chapter4} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
