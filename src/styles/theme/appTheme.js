import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#96bf01',
    },
    text: {
      first: '#ffffff',
      second: '#454545',
      third: '#cfcdce',
    },
  },
  // typography: {
  //   allVariants: {
  //     fontFamily: montserrat.style.fontFamily,
  //   },
  // },
});

const appTheme = responsiveFontSizes(theme);

export default appTheme;
