import React from 'react';
import Button from './Buttons/Button';

function Notification({ children, onClose, level }) {
  function getClassName() {
    if (level === 'error') return 'notification is-danger';
    if (level === 'success') return 'notification is-success';
    if (level === 'white') return 'notification is-white';
    return 'notification';
  }

  return (
    <div className={getClassName()}>
      <Button deleteButton onClick={onClose} />
      {children}
    </div>
  );
}

export default Notification;
