import React from 'react';
import PropTypes from 'prop-types';

function InputLabel({
  className, placeholder, type, onChange,
}) {
  return (
    <label htmlFor={className}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </label>
  );
}

InputLabel.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default InputLabel;
