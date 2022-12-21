import React from 'react';

interface FieldsetProps {
  label: React.ReactNode;
  placeholder: string;
  required: boolean;
  type: string;
  name: string;
  pattern?: string;
}

function Fieldset({
  label,
  placeholder,
  required,
  type,
  name,
  pattern,
}: FieldsetProps) {
  return (
    <fieldset>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={required}
        type={type}
        name={name}
        pattern={pattern}
      />
    </fieldset>
  );
}

export default Fieldset;
