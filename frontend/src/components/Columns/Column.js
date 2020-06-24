import React from 'react';

function Column({ children, size }) {
  function getClassName() {
    if (size) return `column is-${size}`;
    return 'column';
  }
  return (
    <div className={getClassName()}>
      {children}
    </div>
  );
}

export default Column;
