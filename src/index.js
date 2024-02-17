import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import cvproperties from './cvproperties.json';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: cvproperties.colors.primary,
    },
    secondary: {
      main: cvproperties.colors.secondary,
    }
  },
  typography: {
    fontFamily: '"Raleway", sans-serif'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
