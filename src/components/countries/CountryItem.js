import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

const CountryItem = ({ id, flag, name, population, region, capital }) => {
  const theme = useTheme();  
  
  return (
    <Link to={`/countries/${name}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, backgroundColor: `${theme.palette.primary.main}` }}>
        <CardMedia
          component="img"
          height="194"
          image={flag}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" sx={{ color: `${theme.palette.text.primary}` }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Population: {population}
            <br />
            Region: {region}
            <br />
            Capital: {capital}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CountryItem;





