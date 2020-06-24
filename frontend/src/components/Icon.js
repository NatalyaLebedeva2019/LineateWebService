import React from 'react';

function Icon({
  src, alt, size, color,
}) {
  function getClassName() {
    let className = 'icon ';
    if (size) className += `is-${size} `;
    if (color) className += `has-text-${color} `;
    return className;
  }

  return (
    <span className={getClassName()}>
      <img src={src} alt={alt} />
    </span>
  );
}

export default Icon;
