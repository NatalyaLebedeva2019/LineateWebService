import React from 'react';

function Title({ children, type, size }) {
  function getClassName() {
    let className = '';
    if (type) className += `${type} `;
    if (size) className += `is-${size} `;
    return className;
  }

  return (
    <p className={getClassName()}>
      {children}
    </p>
  );
}

export default Title;
