import React from 'react';
import Text from './Text';
import Field from './Field';

function TextField({
  value,
  placeholder,
  onChange,
  type,
  color,
  messageText,
  messageColor,
}) {
  function getClassName() {
    if (color) return `input is-${color}`;
    return 'input';
  }

  return (
    <Field>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={getClassName()}
        onChange={onChange}
      />
      <Text size="7" color={messageColor}>
        {messageText}
      </Text>
    </Field>
  );
}

export default TextField;
