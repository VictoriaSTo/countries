import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = ({ searchCountries }) => {
  const [query, setQuery] = useState("");


const changeQueryHandler = (event) => {
  setQuery(event.target.value);
  searchCountries(event.target.value);
};

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '480px' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField 
      id="country" 
      label="Search for a country..." 
      variant="outlined" 
      value={query} 
      onChange={changeQueryHandler}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      />
  </Box>
  );
}

export default SearchForm;