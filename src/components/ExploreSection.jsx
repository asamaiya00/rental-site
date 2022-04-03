import React from 'react';
import Card from '../components/Card';
import kingsizebed from '../assets/kingsizebed.png';
import penthouse from '../assets/penthouse.png';

const ExploreSection = () => {
  return (
    <section id="explore">
      <h2>Explore</h2>
      <h5>From one-guest rooms to penthouses with pools and gardens</h5>
      <div className="card-gallery">
        <Card
          bgUrl={kingsizebed}
          title="Room with one king-size bed"
          price="35"
          area="28"
        />
        <Card
          bgUrl={penthouse}
          title="Penthouse for 8 person"
          price="2039"
          area="438"
        />
      </div>
    </section>
  );
};

export default ExploreSection;
