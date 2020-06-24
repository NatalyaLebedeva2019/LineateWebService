import React from 'react';

function Dropdown({ children, isActive }) {
  return (
    <div className={isActive ? 'dropdown is-right is-active' : 'dropdown is-right'}>
      {children}
    </div>
  );
}

export default Dropdown;
