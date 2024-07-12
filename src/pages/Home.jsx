import React from 'react';
import Hero from '../components/Hero'; // Import your Hero component
import Articles from '../components/Articles'; // Import your Articles component

const Home = () => {
  return (
    <div>
      <Hero />
      <Articles />
      {/* Add more components as needed for your homepage */}
    </div>
  );
};

export default Home;
