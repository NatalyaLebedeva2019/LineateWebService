import React from 'react';

function Modal({ children, isActive }) {
  return (
    <div className={isActive ? 'modal is-active' : 'modal'}>
      {children}
    </div>
  );
}

export default Modal;
