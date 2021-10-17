import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/styles';

const RegionFilter = ({ filterCountries, regions }) => {
  const [region, setRegion] = React.useState('');
  const theme = useTheme(); 

  const handleChange = (event) => {
    setRegion(event.target.value);
    filterCountries(event.target.value);
  };


  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth >
        <InputLabel id="region-filter-label" sx={{ color: `${theme.palette.text.primary}`}}>Filter by Region</InputLabel>
        <Select
          labelId="region-filter-label"
          id="region-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          {regions.map((region) => {
            return <MenuItem sx={{ backgroundColor: `${theme.palette.primary.main}`}} key={region} value={region} >{region}</MenuItem>           
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default RegionFilter;
