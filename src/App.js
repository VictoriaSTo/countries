import { Route, Redirect } from 'react-router-dom';

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../src/components/ui/Header';
// import theme from './components/ui/Theme';
import AllCountries from "./components/countries/AllCountries";
import themeDark from "./components/ui/Theme";
import CountryPage from "./pages/countryPage";
import NotFound from "./pages/notFound";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { fontSize } from '@mui/system';


function App() {
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
    // background: {
    //   default: isDarkMode ? `${veryDarkBlue}` : `${white}`,
    //   paper: isDarkMode ? `${veryDarkBlue}` : `${white}`,
    // }
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

  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="1600px" className={classes.container}>
            <Header isDarkMode={isDarkMode} onSetIsDarkMode={onSetIsDarkMode}/>
            <main>
              {/* <Switch> */}
              <Route path='/' exact>
                <Redirect to='/countries' />
              </Route>
              <Route path='/countries' exact>
                <AllCountries />
              </Route>
              <Route path='/countries/:countryName'>
                <CountryPage />
              </Route>
              {/* <Route path='*'>
                <NotFound />
              </Route> */}
              {/* </Switch> */}
            </main>
        </Container>
      </ThemeProvider>
  )
}

export default App;

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Paper style={{ height: "100vh"}}>
//         <Grid>
//           <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//           <h1>Hello</h1>
//         </Grid>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// export default App;
