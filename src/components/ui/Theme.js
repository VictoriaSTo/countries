import React from 'react';
import { createTheme } from '@mui/material/styles';

const darkBlue = "hsl(209, 23%, 22%)"
const veryDarkBlue ="hsl(207, 26%, 17%)"
const veryDarkBlueText = "hsl(200, 15%, 8%)"
const darkGray = "hsl(0, 0%, 52%)"
const lightGray = "hsl(0, 0%, 98%)"
const white = "hsl(0, 0%, 100%)"

export default createTheme({
  palette: {
    common: {
      darkBlue: `${darkBlue}`,
      veryDarkBlue: `${veryDarkBlue}`,
      veryDarkBlueText: `${veryDarkBlueText}`,
      darkGray: `${darkGray}`,
      lightGray: `${lightGray}`,
      white: `${white}`
    },
    primary: {
      main: `${white}`,
      light: `${white}`,
      dark: `${veryDarkBlue}`
    },
    secondary: {
      main: `${lightGray}`,
      light: `${lightGray}`,
      dark: `${darkBlue}`
    },
    background: {
      default: `${lightGray}`,
      paper: `${lightGray}`,
    }
  },
  typography: {
    
  }
});