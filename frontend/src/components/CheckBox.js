import React from 'react';
import Field from './Field';

function CheckBox({
  id,
  onChange,
  isSelected,
  children,
}) {
  return (
    <Field>
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        defaultChecked={isSelected}
        data-testid={id}
      />
      <label htmlFor={id}>
        {children}
      </label>
    </Field>
  );
}

export default CheckBox;
