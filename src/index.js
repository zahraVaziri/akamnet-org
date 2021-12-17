import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';

ReactDOM.render(
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);
