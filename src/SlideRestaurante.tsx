import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import restaurante1 from '../src/images/restaurante/restaurante1.jpeg';
import restaurante2 from '../src/images/restaurante/restaurante2.jpeg';
import restaurante3 from '../src/images/restaurante/restaurante3.jpeg';
import restaurante4 from '../src/images/restaurante/restaurante4.jpeg';
import restaurante5 from '../src/images/restaurante/restaurante5.jpeg';
import styled from '@emotion/styled'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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

const EachSlide = styled.section`

  width: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
`

  const handleDragStart = (e:any) => e.preventDefault();

const items = [
  <img src={restaurante3} onDragStart={handleDragStart} role="presentation" />
,

<img src={restaurante5} onDragStart={handleDragStart} role="presentation" />
];

const items2 = [
  <Section5 className="item" data-value="1">1</Section5>,
  <Section5 className="item" data-value="3">2</Section5>,
  <Section5 className="item" data-value="3">3</Section5>,
  <Section5 className="item" data-value="4">4</Section5>,
  <Section5 className="item" data-value="5">5</Section5>,
];

const items3 = [
  <Section4 className="item" data-value="1">1</Section4>,
  <Section4 className="item" data-value="2">2</Section4>,
  <Section4 className="item" data-value="3">3</Section4>,
  <Section4 className="item" data-value="4">4</Section4>,
  <Section4 className="item" data-value="5">5</Section4>,
];

const SlideRestaurante = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ py: 4 }} maxWidth="lg">
  {/* End hero unit */}
      
<Grid container spacing={4} >
<Grid
              item
              xs={12}
              md={12}
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

    <EachSlide>
    <AliceCarousel
    disableDotsControls
        infinite 
        autoPlayInterval={3000} 
        autoPlay
        animationType="fadeout" 
        animationDuration={800}
        disableButtonsControls
        items={items3}
        mouseTracking
    />
    </EachSlide>
    </Grid>

  
</Grid>



</Container>
    </React.Fragment>
  );
};


export default SlideRestaurante;