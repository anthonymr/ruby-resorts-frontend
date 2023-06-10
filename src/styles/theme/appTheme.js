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
      third: '#a1a1a1',
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell'",
    },
  },
});

const appTheme = responsiveFontSizes(theme);

export default appTheme;
