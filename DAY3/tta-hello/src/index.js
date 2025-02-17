import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DTDApp from './DTDApp';
import reportWebVitals from './reportWebVitals';

const DTDroot = ReactDOM.createRoot(document.getElementById('DTDroot'));
DTDroot.render(
  <React.StrictMode>
    <DTDApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
