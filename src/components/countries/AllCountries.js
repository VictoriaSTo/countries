import React, { useState, useEffect } from 'react';
import CountryItem from './CountryItem';
import { Grid } from '@mui/material';
import RegionFilter from '../ui/RegionFilter';
import SearchForm from '../ui/SearchForm';



const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const allRegions = [...new Set(countries.map((country) => country.region))]

  const filterCountries = (region) => {
    const filteredCountries = countries.filter((country) => country.region === region);
    setCountries(filteredCountries);
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const respData = await response.json();

      const loadedCountries = [];

      respData.forEach(function(item, index) {
        loadedCountries.push({
          id: index,
          flag: item.flag,
          name: item.name,
          nativeName: item.nativeName,
          population: item.population,
          region: item.region,
          capital: item.capital,
          subregion: item.subregion,
          topLevelDomain: item.topLevelDomain,
          currencies: item.currencies,
          languages: item.languages,
          borderCountries: item.borders
        })
      })
      setCountries(loadedCountries);
    }
    fetchCountries();
  }, [])

  const countriesList = countries.map((countryItem) => {
    const { id, flag, name, population, region, capital } = countryItem;
    return (    
      <Grid item xs={10} md={3} key={id}>
          <CountryItem 
            id={id}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
      </Grid>
    )
  })
  const filterStyle = {
    marginTop: '60px',    
  }

  return (
  <Grid container>
    <Grid item xs={10} md={10} style={filterStyle} >
      <RegionFilter regions={allRegions} filterCountries={filterCountries}/>
    </Grid>
    <Grid item xs={10} md={10} style={filterStyle} >
      <SearchForm />
    </Grid>
    <Grid container item spacing={10} justifyContent="center" sx={{marginTop: '64px'}}>
      {countriesList}
    </Grid>
  </Grid>
  );
}

export default AllCountries;
