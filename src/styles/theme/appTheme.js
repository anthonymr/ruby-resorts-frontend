import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '##96bf01',
    },
    text: {
      first: '##171717',
      second: '#ffffff',
      third: '#666666',
      fourth: '#cfcdce',
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
