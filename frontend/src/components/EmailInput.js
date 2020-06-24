import React from 'react';
import TextField from './TextField';

function EmailInput({ value, onChange, setIsValid }) {
  function onValueChange(event) {
    onChange(event.target.value);
  }

  function isEmail() {
    return /[\w\d\S-]+@[\w\d\S-]+\.[\w\d\S-]+/.test(value);
  }

  function getColor() {
    if (value === '') {
      setIsValid(false);
      return 'input';
    }
    if (isEmail()) {
      setIsValid(true);
      return 'success';
    }
    setIsValid(false);
    return 'danger';
  }

  return (
    <TextField
      type="email"
      color={getColor()}
      onChange={onValueChange}
      value={value}
      placeholder="Email"
      messageColor="danger"
      messageText={!isEmail() && value !== '' ? 'Input correct email' : ''}
    />
  );
}

export default EmailInput;
