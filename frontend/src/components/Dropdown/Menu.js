import React from 'react';

function Menu({ children }) {
  return (
    <div className="dropdown-menu">
      {children}
    </div>
  );
}

export default Menu;
