import React from 'react';
// import Asteroidsjpg from '../images/Asteroids.jpg';
// import Asteroidswebm from '../images/Asteroids.webm';
// import Asteroidsmp4 from '../images/Asteroids.mp4';
// import Asteroidsogv from '../images/Asteroids.ogv';

export default function Header() {
  return (
    <header className="ParallaxVideo">
      <div className="overlay">
          <h1>NASA Mars Curiosity Rover Photos</h1>
      </div>
      {/* <video loop muted autoPlay poster={Asteroidsjpg}>
          <source src={Asteroidswebm} type="video/webm" />
          <source src={Asteroidsmp4} type="video/mp4" />
          <source src={Asteroidsogv} type="video/ogg" />
      </video> */}
    </header>
  );
}

