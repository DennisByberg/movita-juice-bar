import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { PaletteOptions, ThemeProvider, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    linkColor: {
      active: 'white',
      notActive: grey[400],
    },
    movitaGreen: {
      default: '#76BE40',
      light: '#A0FF71',
    },
    movitaPurple: {
      default: '#8E2F93',
      light: '#deb3ff',
      dark: '#4b1475',
    },
  } as PaletteOptions,

  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontFamily: 'Acme',
      fontSize: '6rem',
    },
    h2: {
      fontFamily: 'Acme',
      fontSize: '3rem',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
