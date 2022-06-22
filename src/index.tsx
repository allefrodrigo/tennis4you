import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import Album from './Album';
import Calendars from './Calendars';

import Footer from './Footer';
import VideoTennis from './Video';
import Info from './Info';
import About from './About';
import Services from './Services'
import Partners from './Partners'
import FotosTenisGalery from './FotosTenisGalery'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
    <VideoTennis />
    <About />
    <FotosTenisGalery />
    <Info />

    <div style={{marginTop: 2}}>
    <Services  />
    </div>
    <Info />


    <Album />
    <Calendars />
    <Partners />
    {/* <About /> */}
    {/* <Services />
    <Price />

   

        <Album /> */}
        
    <Footer />
  </ThemeProvider>,
  document.querySelector('#root'),
);
