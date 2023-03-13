//React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//Local Files
import './index.css';
import App from './App';

//React Router
import { BrowserRouter } from "react-router-dom";

//import Redux
import { store } from "./redux/store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

