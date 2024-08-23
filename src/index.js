import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //react.StrictMode - previne erros em ambiente de desenvolvimento, avisa erros
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


