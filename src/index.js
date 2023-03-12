//React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//Local Files
import './index.css';
import App from './App';

//React Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

