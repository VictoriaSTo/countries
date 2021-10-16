import { Route, Switch, Redirect } from 'react-router-dom';

import React, { useState } from "react";
import { Paper } from "@mui/material";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../src/components/ui/Header';
import { ThemeProvider } from '@mui/material/styles';
// import theme from './components/ui/Theme';
import AllCountries from "./components/countries/AllCountries";
import themeDark from "./components/ui/Theme";
import CountryPage from "./pages/countryPage";
import NotFound from "./pages/notFound";

function App() {
  return (
      <ThemeProvider theme={themeDark}>
        <Paper>
            <Header />
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
              {/* <Route path='/'>
                <NotFound />
              </Route> */}
            </main>
        </Paper>
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
