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
import { Button, CardActionArea, CardActions } from '@mui/material';
const tiers = [
  {
    title: 'Iniciante',
    price: '0',
    image: 'https://blogs.gcc.edu/insider/wp-content/uploads/sites/3/2016/04/Tennis-Racquet-Picturejpg.jpg',
    description: [
     'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
  },
  {
    title: 'Profissional',
    subheader: 'Mais popular',
    price: '15',
    image: 'https://blog.boladetenisdelivery.com/wp-content/uploads/2021/07/tennis-court-1081845_1280.jpg',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  },
  {
    title: 'Empresarial',
    price: '30',
    image: 'https://t3.ftcdn.net/jpg/01/57/41/12/360_F_157411220_oQMOFAsgXicu1QeBMOor86yKK19P5f6j.jpg',

    description: [
      'Sed ut perspiciatis unde',
      'omnis iste natus error sit',
      'voluptatem accusantium',
      'doloremque laudantium'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
];


const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
      
        
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          align="center"
          color="#008337"
          gutterBottom
        >
Garanta sua reserva
        </Typography>
          <Grid container spacing={4}>
            {tiers.map((tier) => (
              
              <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Empresarial' ? 12 : 6}
              md={4}
            >
                 <Typography gutterBottom variant="h5" component="div">
            {tier.title}
          </Typography>
 <Card sx={{ maxWidth: 345 }}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tier.image}
          alt="green iguana"
        />
        <CardContent>
          Reserva
          <Typography gutterBottom variant="h5" component="div">
            Quadra 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
   
      {/* End footer */}
    </ThemeProvider>
  );
}