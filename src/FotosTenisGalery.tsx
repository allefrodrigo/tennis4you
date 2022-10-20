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



function CallFotos() {
  return (
    <React.Fragment>
  <Gallery photos={photos} />
      </React.Fragment>
  );
}
export default function FotoTenisGalery() {
  return <CallFotos />;
}