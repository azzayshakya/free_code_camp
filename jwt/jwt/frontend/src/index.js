import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeTokenRefresh } from './authUtils'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

initializeTokenRefresh();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
