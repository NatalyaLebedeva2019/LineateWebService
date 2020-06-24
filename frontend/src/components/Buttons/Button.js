import React from 'react';

function Button({
  onClick,
  children,
  color,
  disabled = false,
  fullwidth,
  deleteButton,
}) {
  function getClassName() {
    if (deleteButton) return 'delete';
    let className = 'button ';
    if (color) className += `is-${color} `;
    if (fullwidth) className += 'is-fullwidth ';
    return className;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={getClassName()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
