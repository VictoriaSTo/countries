import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RegionFilter = ({ filterCountries, regions }) => {
  const [region, setRegion] = React.useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
    filterCountries(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 220, marginTop: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="region-filter-label">Filter by Region</InputLabel>
        <Select
          labelId="region-filter-label"
          id="region-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          {regions.map((region) => {
            return <MenuItem key={region} value={region}>{region}</MenuItem>           
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default RegionFilter;
