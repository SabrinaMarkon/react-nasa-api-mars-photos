import React from 'react';

export default function ParticleContainer() {
  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(i);
  }
  return (
    <div className="particle-container">
      {particles.map((value, index) => {
        return <div key={index} className="particle"></div>
      })}
    </div>
  )
}
