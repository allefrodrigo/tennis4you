import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import restaurante1 from '../src/images/restaurante/restaurante1-size.jpg';
import restaurante2 from '../src/images/restaurante/restaurante2-size.jpg';
import restaurante3 from '../src/images/restaurante/restaurante3-size.jpg';
import restaurante4 from '../src/images/restaurante/restaurante4-size.jpg';
import restaurante5 from '../src/images/restaurante/restaurante5-size.jpg';
import styled from '@emotion/styled'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Section4 = styled.section`
  background: #004E18;
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section5 = styled.section`
  background: #F5BB00;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EachSlide = styled.div`
  object-fit: cover;
  width: 680px;
  height: 600px;
`

  const handleDragStart = (e:any) => e.preventDefault();


const items2 = [

<EachSlide><img src={restaurante1}  /></EachSlide>,
<EachSlide><img src={restaurante2}  /></EachSlide>,
<EachSlide><img src={restaurante3}  /></EachSlide>,
<EachSlide><img src={restaurante4} /></EachSlide>,
<EachSlide><img src={restaurante5}  /></EachSlide>

];



const SlideRestaurante = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth="lg"  sx={{ py: 1 }}>
        <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#004E18"
          gutterBottom
        >
          Conheça o Sweet Spot!
        </Typography>



  {/* End hero unit */}
{/*       
<Grid container spacing={2}  >
<Grid
              item
              xs={12}
              md={4}
            >
              
<EachSlide>
    <AliceCarousel
    disableDotsControls
        infinite 
        autoPlayInterval={3000} 
        autoPlay
        animationType="fadeout" 
        animationDuration={800}
        disableButtonsControls
        items={items2}
        mouseTracking
    />
    </EachSlide>
    ads
    </Grid>
    <Grid

item
xs={8}
md={12}
>
10
  </Grid>

  
</Grid>


*/}
<Grid container spacing={2}>
  <Grid item xs={8}>
  
    <AliceCarousel
    disableDotsControls
        infinite 
        autoPlayInterval={3500} 
        autoPlay
        animationType="fadeout" 
        animationDuration={500}
        disableButtonsControls
        items={items2}
        
    />
  </Grid>
  <Grid item xs={4}>
    <Typography     component="h2"
          variant="h2"
          fontSize={32}
          align="center"
          color="#text.primary"
          gutterBottom
          >Um spot acolhedor onde os atletas podem descansar e recarregar as energias.
          Para os visitantes e familiares o Sweet Spot é um lugar único com uma vista deslumbrante e pratos que nos cativam o paladar. Comida caseira com o melhor da cozinha tradicional portuguesa.
          </Typography>

          {/* <Typography     component="h3"
          variant="h2"
          fontSize={14}
          align="center"
          color="#text.primary"
          gutterBottom
          >
            Capacidade para 50 pessoas.<br />
            Amplo parque de estacionamento e parque infantil.<br />
            Para todos os gostos: Diariamente pratos de carne, peixe e vegetariano<br />
            Reservas de grupo; Aniversarios, Batizados, Eventos<br />
              </Typography> */}
         






  </Grid>
  {/* <Grid item xs={4}>
    <Typography>xs=4</Typography>
  </Grid>
  <Grid item xs={8}>
    <Typography>xs=8</Typography>
  </Grid> */}
</Grid>
</Container> 
    </React.Fragment>
  );
};


export default SlideRestaurante;