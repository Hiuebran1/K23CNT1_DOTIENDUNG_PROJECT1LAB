import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dtd7App from './dtd7App';
import reportWebVitals from './reportWebVitals';

const dtd7root = ReactDOM.createRoot(document.getElementById('dtd7root'));
dtd7root.render(
  <React.StrictMode>
    <dtd7App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
