import React from 'react';

function Text({
  children, color, size, weight,
}) {
  function getClassName() {
    let className = '';
    if (color) className += `has-text-${color} `;
    if (size) className += `is-size-${size} `;
    if (weight) className += `has-text-weight-${weight} `;
    return className;
  }

  return (
    <p className={getClassName()}>
      {children}
    </p>
  );
}

export default Text;
