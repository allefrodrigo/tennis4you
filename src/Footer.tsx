import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import tenis4you from '../src/images/tenis4you.png'

import { Button, CardActionArea, CardActions } from '@mui/material';
const footers = [
 
  {
    title: 'Redes Sociais',
    description: ['Instagram', 'Youtube'],
  },
];
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
  
      {/* Footer */}


      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          
          py: [3, 6],
        }}
      >
        <Grid container spacing={2} justifyContent="space-evenly">

            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Endereço
              </Typography>
              <ul>
                <li>
                  <Typography variant="subtitle1" color="text.secondary">
                R. do Alto dos Alcoutins
                    </Typography>
                    </li>
                    <li>
                  <Typography variant="subtitle1" color="text.secondary">
                Nº1, 1600-269
                    </Typography>
                    </li>
                    <li>
                  <Typography variant="subtitle1" color="text.secondary">
                Lisboa, Portugal
                    </Typography>
                    </li>
                    
              </ul>
            </Grid>   
            <Grid item xs={6} sm={3}>

                    <img src={tenis4you} width="80%"></img>
        </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Redes sociais
              </Typography>
              <ul>
                <li><Link href="#" variant="subtitle1" color="text.secondary">
                      Instagram
                    </Link>
                    </li>
                    <li><Link href="#" variant="subtitle1" color="text.secondary">
                      Youtube
                    </Link>
                </li>
                    
              </ul>
            </Grid>  
        </Grid>
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}