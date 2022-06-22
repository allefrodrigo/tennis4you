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
import { CardActionArea, CardActions } from '@mui/material';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/CalendarMonth';
import SendIcon from '@mui/icons-material/Send';

const Section = styled.section`
  background: #008337;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`


const tiers = [
  {  
    title: 'Eventos diversos',
    price: '0',
    image: 'https://t3.ftcdn.net/jpg/01/57/41/12/360_F_157411220_oQMOFAsgXicu1QeBMOor86yKK19P5f6j.jpg',
    desc: 'Aluguer de espaços para as festas de aniversários, organização de ligas, torneios e clínicas desportivas para as jovens nas suas férias escolares',
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
    title: 'Aulas de Ténis',
    subheader: 'Mais popular',
    price: '15',
    image: 'https://blog.boladetenisdelivery.com/wp-content/uploads/2021/07/tennis-court-1081845_1280.jpg',
    desc: 'No clube Tenis 4 You temos programas intensivos para um melhor desenvolvimento, um reforço na evolução, além de cursos de treinadores e arbitragem.',
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
    title: 'Campos de ténis',
    price: '30',
    image: 'https://blogs.gcc.edu/insider/wp-content/uploads/sites/3/2016/04/Tennis-Racquet-Picturejpg.jpg',
    desc: 'O clube Ténis4you conta com 2 campos de relva sintética de última geração, 2 paredes e sede social.',
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
      
        <Section>

        <Container sx={{ py: 4 }} fixed>
          {/* End hero unit */}
          <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#FFFFFF"
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
              md={4}
            >
                 {/* <Typography gutterBottom variant="h5" component="div">
            {tier.title}
          </Typography> */}
 <Card sx={{ maxWidth: 345 }}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tier.image}
          alt="green iguana"
        />
        <CardContent>
          Reserve agora
          <Typography gutterBottom variant="h5" component="div">
          {tier.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tier.desc}
          </Typography>
          <Button style={{marginTop: 10}}variant="contained" color="success" startIcon={<DeleteIcon />}>
        Faça seu agendamento
      </Button>
        </CardContent>
      </CardActionArea>
    </Card>
              </Grid>
            ))}
          </Grid>
        
        </Container>
        </Section>
      </main>
   
      {/* End footer */}
    </ThemeProvider>
  );
}