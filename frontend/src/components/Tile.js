import React from 'react';

function Tile({ children, ancestor, parent }) {
  function getClassName() {
    if (ancestor) return 'tile is-ancestor';
    if (parent) return 'tile is-parent';
    return 'tile';
  }

  return (
    <div className={getClassName()}>
      {children}
    </div>
  );
}

export default Tile;
