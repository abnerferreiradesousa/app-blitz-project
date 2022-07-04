import React from 'react';
import PropTypes from 'prop-types';

function InputLabel({ className, placeholder, type }) {
  return (
    <label htmlFor={className}>
      <input type={type} placeholder={placeholder} className={className} />
    </label>
  );
}

InputLabel.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default InputLabel;
