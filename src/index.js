import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import store from './redux/store';
import appTheme from './styles/theme/appTheme';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
