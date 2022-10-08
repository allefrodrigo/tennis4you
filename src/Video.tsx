import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tennis4YouVideo from "../src/media/tennis4you.mp4";


const cards = [1, 2, 3];

const theme = createTheme();

export default function Video() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
       
        <video autoPlay loop muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          zIndex: "-1"
        }}
        >
          <source src={Tennis4YouVideo} type="video/mp4"></source>
        </video>
        {/* <Container maxWidth='xl'>


        </Container> */}
      </main>
   
      {/* End footer */}
    </ThemeProvider>
  );
}