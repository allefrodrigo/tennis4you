import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#004E18',
    },
    secondary: {
      main: '#f5bb00',
    },
    error: {
      main: '#000000'
    },
  
  },
});

export default theme;
