import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#66bb6a',
    },
    secondary: {
      main: '#E1DB51',
    },
    error: {
      main: '#000000'
    },
  
  },
});

export default theme;
