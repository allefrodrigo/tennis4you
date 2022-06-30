import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import Album from './Album';
import Calendars from './Calendars';
import NewCalendar from './NewCalendar';

import Footer from './Footer';
import VideoTennis from './Video';
import Info from './Info';
import InfoTwo from './InfoTwo';
import Contacts from './Contacts';

import About from './About';
import Services from './Services'
import Partners from './Partners'
import FotosTenisGalery from './FotosTenisGalery'

import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import { createRoot } from 'react-dom/client';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
          <VideoTennis />
    <BrowserRouter>

    <Routes>
          <Route path="/" element={
          
          <div>

          
          
          <About />
          <FotosTenisGalery />
          <Info />   
          <div style={{marginTop: 2}}>
    <Services  />
    </div>
    <InfoTwo />


    <Album />
    {/* <Calendars /> */}
    <NewCalendar></NewCalendar>
    <Partners />   
    <Footer />
   
          </div>

          } />
        <Route path="about" element={
    <div>
          <About />
          <Contacts />

    </div>

        } />




    </Routes>
  

 
    {/* <About /> */}
    {/* <Services />
    <Price />

   

        <Album /> */}
        
    </ BrowserRouter>

  </ThemeProvider>,
);
