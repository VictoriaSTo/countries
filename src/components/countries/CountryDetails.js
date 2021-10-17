import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
import { useTheme } from '@mui/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%'
});

const CountryDetails = ({ flag, name, nativeName,population,region, capital, subregion, topLevelDomain, currencies, languages, borderCountries}) => {
  const theme = useTheme();  
  // const borderCountriesAll = borderCountries.map((borderCountry) => (<button>{borderCountry}</button>))
  let history = useHistory();

  return (
    <Grid container spacing={2} sx={{
      height: '100%',
      }}>
        <Grid item xs={12} md={12}>
          <Button 
            onClick={() => history.goBack()} 
            variant="contained" 
            startIcon={<KeyboardBackspaceIcon />}
            sx={{
              width: '120px',
              marginBottom: '5%'
              }}
            >
              Back
          </Button>
        </Grid>
        <Grid item xs={12} md={5} >
            <Img alt="country flag" src={flag} />
        </Grid>
        <Grid item xs={10} md={6} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: `${theme.palette.text.primary}` }}>
                <h1>{name}</h1>
              </Typography>
              <Grid container spacing={6} >
                <Grid item>
                  <Typography variant="body3" gutterBottom sx={{ color: `${theme.palette.text.primary}` }}>
                    <p>Native Name: {nativeName}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Sub Region: {subregion}</p>  
                    <p>Capital: {capital}</p>  
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body3" gutterBottom sx={{ color: `${theme.palette.text.primary}`}}>
                    <p>Top Level Domain: {topLevelDomain}</p>
                    <p>Currencies: {currencies}</p>
                    <p>Languages: {languages}</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography sx={{ cursor: 'pointer' }} variant="body3">
                <p>Border Countries: {borderCountriesAll}</p> 
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
}

export default CountryDetails;