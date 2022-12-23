import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const Filter = ({ setFilter }) => {
  const [value, setValue] = useState('');

  const handleInputChange = ({ target }) => {
    setValue(target.value);
    setFilter(target.value.toLowerCase());
  };

  return (
    <TextField
      id="outlined-basic"
      label="Знайти по імені"
      variant="outlined"
      size="small"
      value={value}
      onChange={handleInputChange}
    />
  );
};
Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
