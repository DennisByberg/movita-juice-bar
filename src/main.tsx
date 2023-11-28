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
  } as PaletteOptions,

  typography: {
    h1: {
      fontSize: '6rem',
      fontWeight: 600,
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
