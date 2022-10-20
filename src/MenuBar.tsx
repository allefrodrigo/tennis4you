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
import xnauto from '../src/images/logo_xanauto.png'
import dunlop from '../src/images/logo_dunlop.png'
import solinco from '../src/images/logo_solinco.png'


import { jsx } from '@emotion/react'

const Section = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 self-align: center;
`

const Section4 = styled.section`
  background: #004E18;
  color: #fff;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MudarCor = styled.section`
filter: grayscale(100%);
  &:hover{
    filter: grayscale(0%);

  };
`

const Section2 = styled.section`
  padding: 30px;
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


function CallMenuBar() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container  disableGutters maxWidth="lg" component="main" sx={{ pt:4, pb: 4 }}>
      <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#000000"
          gutterBottom
        >
          Nossos parceiros
        </Typography>

        <Section> 
        <Box
        component="img"
        sx={{
          width: '30%',
          filter: `grayscale(100%)`,
          color: 'black', '&:hover': {
            filter: `grayscale(0%)`
        }}}
        alt="The house from the offer."
        src={xnauto}
      />          <Box
        component="img"
        sx={{
          width: '30%',
          filter: `grayscale(100%)`,
          color: 'black', '&:hover': {
            filter: `grayscale(0%)`
        }}}
        alt="The house from the offer."
        src={dunlop}
      />
           <Box
        component="img"
        sx={{
          width: '30%',
          filter: `grayscale(100%)`,
          color: 'black', '&:hover': {
            filter: `grayscale(0%)`
        }}}
        alt="The house from the offer."
        src={solinco}
      />
        </Section>
     

 

{/* <MudarCor>      <img src={xnauto} width="30%"></img>
</MudarCor>
<MudarCor>      <img src={xnauto} width="30%"></img>
</MudarCor> */}



  
    
  

      </Container>

 
      

      

      {/* End hero unit */}
     
      {/* Footer */}
  
      {/* End footer */}
    </React.Fragment>
  );
}
export default function Partners() {
  return <CallMenuBar />;
}