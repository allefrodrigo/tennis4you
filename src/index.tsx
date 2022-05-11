import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import Album from './Album';
import Footer from './Footer';
import VideoTennis from './Video';
import Price from './Price';
import About from './About';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
    <VideoTennis />
    <About />
    <Price />
    <Album />
    <Footer />
  </ThemeProvider>,
  document.querySelector('#root'),
);
