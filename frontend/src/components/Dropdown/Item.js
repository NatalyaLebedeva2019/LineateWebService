import React from 'react';

function Item({ children }) {
  return (
    <div className="dropdown-item">
      {children}
    </div>
  );
}

export default Item;
