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
import { ThreeDRotation } from '@mui/icons-material';
import Favorite from '@mui/icons-material/Favorite';
import { Button, CardActionArea, CardActions } from '@mui/material'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import styled from '@emotion/styled'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Section = styled.section`
  background: #f5bb00;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`


const tiers = [
  {
    title: 'Youtube',
    price: '0',
    image: 'https://blogs.gcc.edu/insider/wp-content/uploads/sites/3/2016/04/Tennis-Racquet-Picturejpg.jpg',
desc:'Garantir aos nossos frequentadores um ensino num contexto emocional positivo, experiência desportiva única, transformar o ténis em sucesso, alegria e felicidade',
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
    title: 'Instagram',
    subheader: 'Mais popular',
    price: '15',
    image: 'https://blog.boladetenisdelivery.com/wp-content/uploads/2021/07/tennis-court-1081845_1280.jpg',
    desc: ' Criar um clube onde todos acreditem que podem aprender a jogar ténis, contribuir para o desenvolvimento do ténis',
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
    title: 'Nossos valores',
    subheader: 'Mais popular',
    price: '15',
    image: 'https://blog.boladetenisdelivery.com/wp-content/uploads/2021/07/tennis-court-1081845_1280.jpg',
    description:       'Treinadores credenciados pela Federação Portuguesa de Ténis de Nível -  III',
    desc: 'Paixão, honestidade, Alegria, Ética, Simplicidade, segurança, educação, higiene, saúde',
    
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  }
];


const cards = [1, 2, 3];

const theme = createTheme();

export default function Services() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
      
        <Section>

        <Container sx={{ py: 4 }} maxWidth="lg">
          {/* End hero unit */}
          <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#1a1a1a"
          gutterBottom
        >
Acompanhe-nos em nossas redes sociais
        </Typography>
              
        <Grid container spacing={4}>
            {tiers.map((tier) => (
              
              <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
            >
      
      <Card sx={{ minHeight: 180 }}>
      <CardContent sx={{ alignItems: 'center'}}>
        {
          tier.title === 'Nossos valores' ? (<Favorite fontSize="large"></Favorite>) : tier.title === 'Nossa missão' ? (<EmojiFlagsIcon fontSize="large"></EmojiFlagsIcon>) : tier.title === 'Professores qualificados' ?  (<WorkspacePremiumIcon fontSize="large"></WorkspacePremiumIcon>) : (<VisibilityTwoToneIcon fontSize="large"></VisibilityTwoToneIcon>)
        }
        
        <Typography variant="h5" fontWeight={500} fontSize={18} component="div">
        {tier.title}
        </Typography>
       
        <Typography variant="body2">
        {tier.desc}
          <br />
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
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