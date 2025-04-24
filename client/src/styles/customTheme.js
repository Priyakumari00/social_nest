import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#a8d0e6' : '#008080', // misty blue / deep teal
      },
      secondary: {
        main: darkMode ? '#f8e9a1' : '#006666', // soft yellow / rich teal-green
      },
      
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: 'break-word',
        },
      },
    },
  });

export default customTheme;
