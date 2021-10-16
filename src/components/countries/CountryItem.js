import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CountryItem = ({ id, flag, name, population, region, capital }) => {
  return (
    <Link to={`/countries/${name}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={flag}
          alt="Paella dish"
        />
        <CardContent>
          <Typography vatiant="h5" color="text.primary">
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





