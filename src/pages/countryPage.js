import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CountryDetails from '../components/countries/CountryDetails';

const CountryPage = () => {
  const params = useParams();
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${params.countryName}`);
      const respData = await response.json();

      const currenciesArray = []
      respData[0].currencies.map((currency) => currenciesArray.push(currency.name))
      const currenciesAll = currenciesArray.join(", ")

      const languagesArray = []
      respData[0].languages.map((language) => languagesArray.push(language.name))
      const languagesAll = languagesArray.join(", ")

      console.log(respData[0])

      const loadedCountryDetails = {
          flag: respData[0].flag,
          name: respData[0].name,
          nativeName: respData[0].nativeName,
          population: respData[0].population,
          region: respData[0].region,
          capital: respData[0].capital,
          subregion: respData[0].subregion,
          topLevelDomain: respData[0].topLevelDomain,
          currencies: currenciesAll,
          languages: languagesAll,
          borderCountries: respData[0].borders 
      };
   (setCountryDetails(loadedCountryDetails));
    }
    fetchCountryDetails();
  }, [params.countryName])
  
  return (
    <div>
      <h1>It's a country page </h1>
      <CountryDetails
          flag={countryDetails.flag}
          name={countryDetails.name}
          nativeName={countryDetails.nativeName}
          population={countryDetails.population}
          region={countryDetails.region}
          capital={countryDetails.capital}
          subregion={countryDetails.subregion}
          topLevelDomain={countryDetails.topLevelDomain}
          currencies={countryDetails.currencies}
          languages={countryDetails.languages}
          borderCountries={countryDetails.borderCountries}
      />
    </div>
  );
}

export default CountryPage;
