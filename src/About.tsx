import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from '@emotion/styled'
import AboutImage from '../src/images/about.jpeg'
import tenis4you from '../src/images/tenis4you.png'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const Section = styled.section`
  background: #004E18;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Section3 = styled.section`
background: #004E18;
padding: 0 1rem 1rem 1rem;

`

const Section2 = styled.section`
    position: absolute;
    width: 50%;
    padding: 0 1rem 1rem 1rem;
    background-color: #FF3366;
`

const tiers = [
  {
    title: 'Iniciante',
    price: '0',
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
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function CallAbout() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="lg" component="main" sx={{ py: 4 }}>
        <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#004E18"
          gutterBottom
        >
          Bem vindo ao Ténis4You
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          fontSize={20}
          align="center"
          color="#text.primary"
          gutterBottom
        >
          Onde a paixão e a arte de ensinar se unem
        </Typography>

   
      </Container>

      {/* <div className="row">
  <div className='column'>
  </div>
  <div className='column'>
  <div>
      Com mais de 20 anos de experiência na área do ensino dos desportos de raquetas (Ténis e Padel), José Galante e Pedro Ferreira resolveram abraçar um projecto a dois que tivesse o seu próprio cunho. Assim, no dia 30 de Outubro de 2008, nascia a empresa Ténis4You. Sediada na Quinta dos Alcoutins, lugar paradisíaco no meio do verde do campo de Golfe do Paço do Lumiar. Com cerca de 160 alunos na Escola, baseamos o nosso ensino num método muito simples, altamente eficaz e com resultados imediatos para quem experimenta pela primeira vez!    
      </div>
  </div>
</div>
    */}





{/* <Section3>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <Section2>
          <img src={AboutImage} width="60%" style={{paddingLeft: '10px', }}/>

        </Section2>

        </Grid>
        <Grid item xs={4}>
        Com mais de 20 anos de experiência na área do ensino dos desportos de raquetas (Ténis e Padel), José Galante e Pedro Ferreira resolveram abraçar um projecto a dois que tivesse o seu próprio cunho. Assim, no dia 30 de Outubro de 2008, nascia a empresa Ténis4You. Sediada na Quinta dos Alcoutins, lugar paradisíaco no meio do verde do campo de Golfe do Paço do Lumiar. Com cerca de 160 alunos na Escola, baseamos o nosso ensino num método muito simples, altamente eficaz e com resultados imediatos para quem experimenta pela primeira vez!    
        </Grid>
     
      </Grid>
    </Box>
     
    </Section3> */}
      {/* Footer */}
  
      {/* End footer */}
    </React.Fragment>
  );
}
export default function About() {
  return <CallAbout />;
}