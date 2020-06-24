import React from 'react';

function Content({ children }) {
  return (
    <div className="dropdown-content">
      {children}
    </div>
  );
}

export default Content;
