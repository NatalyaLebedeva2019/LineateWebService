import React from 'react';

function Hero({ children, color }) {
  function getClassName() {
    if (color) return `hero is-${color}`;
    return 'hero';
  }

  return (
    <div className={getClassName()}>
      <div className="hero-body">
        {children}
      </div>
    </div>
  );
}

export default Hero;
