import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DTD2App from './DTD2App';
import reportWebVitals from './reportWebVitals';

const DTD2root = ReactDOM.createRoot(document.getElementById('DTD2root'));
DTD2root.render(
  <React.StrictMode>
    <DTD2App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
