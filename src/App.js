import { Route, Redirect } from 'react-router-dom';
import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Header from '../src/components/ui/Header';
import AllCountries from "./pages/AllCountries";
import CountryPage from "./pages/countryPage";



function App() {

  // theme settings (ideally should be as a separate component in theme.js)
  document.body.style.margin = '0px';
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onSetIsDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const darkBlue = "hsl(209, 23%, 22%)"
  const veryDarkBlue ="hsl(207, 26%, 17%)"
  const veryDarkBlueText = "hsl(200, 15%, 8%)"
  const darkGray = "hsl(0, 0%, 52%)"
  const lightGray = "hsl(0, 0%, 98%)"
  const white = "hsl(0, 0%, 100%)"

const theme = createTheme({
  palette: {
    type: isDarkMode ? 'dark' : 'light',
    common: {
      darkBlue: `${darkBlue}`,
      veryDarkBlue: `${veryDarkBlue}`,
      veryDarkBlueText: `${veryDarkBlueText}`,
      darkGray: `${darkGray}`,
      lightGray: `${lightGray}`,
      white: `${white}`
    },
    primary: {
      main: isDarkMode ? `${darkBlue}` : `${white}`,
    },
    secondary: {
      main: isDarkMode ? `${darkBlue}` : `${lightGray}`
    },
    text: {
      primary: isDarkMode ? `${white}` : `${veryDarkBlueText}`
    }
  },
  typography: {
    fontFamily: "Nunito Sans",
    body2: {
      fontFamily: "Nunito Sans",
      fontSize: 14,
      ontWeightLight: 300
    },
    h6: {      
      fontFamily: "Nunito Sans",
      fontWeightBold: 600, 
    },
    body3: {
      fontFamily: "Nunito Sans",
      fontSize: 16,
      ontWeightLight: 300
    },
  },
});

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    backgroundColor: isDarkMode ? `${veryDarkBlue}` : `${lightGray}`,
    margin: '0',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '102px'
  }
}))

const classes = useStyles();

// routes

  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="1600px" className={classes.container}>
            <Header isDarkMode={isDarkMode} onSetIsDarkMode={onSetIsDarkMode}/>
            <main>
              <Route path='/' exact>
                <Redirect to='/countries' />
              </Route>
              <Route path='/countries' exact>
                <AllCountries />
              </Route>
              <Route path='/countries/:countryName'>
                <CountryPage />
              </Route>
            </main>
        </Container>
      </ThemeProvider>
  )
}

export default App;