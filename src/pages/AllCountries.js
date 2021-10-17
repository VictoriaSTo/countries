import React, { useState, useEffect } from 'react';
import CountryItem from '../components/countries/CountryItem';
import { Grid } from '@mui/material';
import RegionFilter from '../components/ui/RegionFilter';
import SearchForm from '../components/ui/SearchForm';



const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const allRegions = [...new Set(countries.map((country) => country.region))]

  const filterCountries = (region) => {
    const filteredCountries = countries.filter((country) => country.region === region);
    setCountries(filteredCountries);
  }

  const searchCountries = (query) => {
    const searchedCountries = countries.filter((country) => country.name.toLowerCase().startsWith(query.toLowerCase()));
    setCountries(searchedCountries);
  }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
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
      } catch (error) {
        console.log(error)
      }
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
    marginTop: '10px'
  }

  return (
  <Grid container>
    <Grid container item justifyContent="space-between" sx={{
      marginBottom: '48px'
      }}>
      <Grid item xs={6} md={6} >
        <SearchForm searchCountries={searchCountries}/>
      </Grid>
      <Grid item xs={6} md={2} style={filterStyle} >
        <RegionFilter regions={allRegions} filterCountries={filterCountries}/>
      </Grid>
    </Grid>
    <Grid container item spacing={10} justifyContent="center" >
      {countriesList}
    </Grid>
  </Grid>
  );
}

export default AllCountries;
