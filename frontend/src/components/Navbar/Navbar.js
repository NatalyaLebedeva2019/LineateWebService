import React from 'react';

function Navbar({ children }) {
  return (
    <nav className="navbar" role="navigation">
      {children}
    </nav>
  );
}

export default Navbar;
