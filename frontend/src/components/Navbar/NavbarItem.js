import React from 'react';

function NavbarItem({ children, onClick }) {
  return (
    <a className="navbar-item" onClick={onClick}>
      {children}
    </a>
  );
}

export default NavbarItem;
