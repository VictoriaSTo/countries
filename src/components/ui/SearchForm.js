import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/styles';

const SearchForm = ({ searchCountries }) => {
  const [query, setQuery] = useState("");
  const theme = useTheme(); 


const changeQueryHandler = (event) => {
  setQuery(event.target.value);
  searchCountries(event.target.value);
};

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '320px', marginLeft: '0px' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField 
      sx={{ color: `${theme.palette.text.primary}` }}
      id="country" 
      placeholder="Search for a country..." 
      variant="outlined" 
      value={query} 
      color="primary"
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