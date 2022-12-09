import React from "react";

function Fieldset({ children, placeholder, required, type, name, pattern }) {
  return (
    <fieldset>
      <label>{children}</label>
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
