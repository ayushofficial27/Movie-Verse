import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App.js';
import { ScrollToTop } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <ScrollToTop></ScrollToTop>
    <App />
    </Router>
  </React.StrictMode>
);