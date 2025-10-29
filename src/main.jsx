import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// 1. Importa il Browser Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Avvolgi la tua App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);