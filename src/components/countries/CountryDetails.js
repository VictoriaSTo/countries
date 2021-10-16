import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '85%',
  maxHeight: '85%',
});

const CountryDetails = ({ flag, name, nativeName,population,region, capital, subregion, topLevelDomain, currencies, languages, borderCountries}) => {
  // const borderCountriesAll = borderCountries.map((borderCountry) => (<button>{borderCountry}</button>))
  let history = useHistory();

  return (
    <Grid container spacing={2} sx={{
      height: '100vh',
      marginTop: '64px'
      }}>
      <Grid item xs={10} md={6}>
          <button onClick={() => history.goBack()}>Back</button>
          <Img alt="country flag" src={flag} />
      </Grid>
      <Grid item xs={10} md={6} container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              <h1>{name}</h1>
            </Typography>
            <Grid container spacing={12}>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  <p>Native Name: {nativeName}</p>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Sub Region: {subregion}</p>  
                  <p>Capital: {capital}</p>  
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  <p>Top Level Domain: {topLevelDomain}</p>
                  <p>Currencies: {currencies}</p>
                  <p>Languages: {languages}</p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              {/* <p>Border Countries: {borderCountriesAll}</p>  */}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CountryDetails;

  {/* return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
} */}
