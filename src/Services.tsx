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
import { Instagram, ThreeDRotation } from '@mui/icons-material';
import Favorite from '@mui/icons-material/Favorite';
import { Button, CardActionArea, CardActions } from '@mui/material'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import social1 from '../src/images/social_1.jpeg'
import social2 from '../src/images/social_2.jpg'
import social3 from '../src/images/social_3.jpg'

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
    image: `url(${social1})`,
desc:'Garantir aos nossos frequentadores um ensino num contexto emocional positivo, experiência desportiva única, transformar o ténis em sucesso, alegria e felicidade',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonInfo: 'https://www.youtube.com/channel/UCDyRmdKkBJ53CxL5AD1twuw',
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
  },
  {
    title: 'Instagram',
    subheader: 'Mais popular',
    price: '15',
    image: `url(${social2})`,
    desc: ' Criar um clube onde todos acreditem que podem aprender a jogar ténis, contribuir para o desenvolvimento do ténis',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonInfo: 'https://www.instagram.com/tenis4you.alcoutins/',
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  },
  {
    title: 'Facebook',
    subheader: 'Mais popular',
    price: '15',
    image: `url(${social3})`,
    description:       'Treinadores credenciados pela Federação Portuguesa de Ténis de Nível -  III',
    desc: 'Paixão, honestidade, Alegria, Ética, Simplicidade, segurança, educação, higiene, saúde',
    buttonInfo: 'https://www.facebook.com/tenis4you.alcoutins',
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
              
        <Grid container   spacing={4} 

  >
            {tiers.map((tier) => (
              
              <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
              
            >
      
      <Card sx={{ minHeight: '10vh'  }}>
      <CardActionArea href={tier.buttonInfo}>
      <Box  sx={{backgroundImage: tier.image}} style={{ display:'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent:'center', textAlign: 'center'}}  >

      <CardContent >
        {
          tier.title === 'Youtube' ? (<YouTubeIcon fontSize="large" color="error"></YouTubeIcon>) : tier.title === 'Instagram' ? (<InstagramIcon fontSize="large"></InstagramIcon>) : tier.title === 'Facebook' ?  (<FacebookIcon color='primary' fontSize="large"></FacebookIcon>) : (<FacebookIcon  fontSize="large"></FacebookIcon>)
        }
        
        <Typography variant="h5" fontWeight={500} fontSize={18} component="div">
        {tier.title}
        </Typography>
       
        {/* <Typography variant="body2">
        {tier.desc}
          <br />
        </Typography> */}
      </CardContent>
      </Box>
      </CardActionArea>


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