import React from 'react';
import TextField from './TextField';

function PhoneInput({ value, onChange, setIsValid }) {
  function formatPhoneNumber() {
    if (value.length === 0) return '';
    return `+7 ${value}`;
  }

  function onValueChange(event) {
    let phone = event.target.value;
    phone = phone.replace('+7', '');
    phone = phone.replace(/[^0-9]+/g, '');
    phone = phone.substr(0, 10);
    onChange(phone);
  }

  function getColor() {
    if (value === '') {
      setIsValid(false);
      return 'input';
    }
    if (value.length < 10) {
      setIsValid(false);
      return 'danger';
    }
    setIsValid(true);
    return 'success';
  }

  return (
    <TextField
      type="tel"
      color={getColor()}
      onChange={onValueChange}
      value={formatPhoneNumber()}
      placeholder="Phone number"
      messageColor="danger"
      messageText={value.length < 10 && value !== '' ? 'Input correct phone number' : ''}
    />
  );
}

export default PhoneInput;
