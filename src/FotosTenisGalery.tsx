import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import styled from '@emotion/styled'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

/* popout the browser and maximize to see more rows! -> */
// const BasicRows = () => ;
// render(<BasicRows />, document.getElementById("app"));

const Section = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 self-align: center;
`

const Section4 = styled.section`
  background: #008337;
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


function CallAbout() {
  return (
    <React.Fragment>
  <Gallery photos={photos} />
      </React.Fragment>
  );
}
export default function FotoTenisGalery() {
  return <CallAbout />;
}