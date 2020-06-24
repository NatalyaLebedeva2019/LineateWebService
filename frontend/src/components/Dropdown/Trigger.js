import React from 'react';

function Trigger({ children }) {
  return (
    <div className="dropdown-trigger">
      {children}
    </div>
  );
}

export default Trigger;
