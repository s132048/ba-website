import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
    palette: {
        // primary: {
        //     // Purple and green play nicely together.
        //     main: '',
        // },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
             <App/>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
