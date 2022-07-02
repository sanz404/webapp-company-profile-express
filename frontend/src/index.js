import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Custom Styles
import "./Styles/public.scss"
import "./Styles/admin.scss"
import "./Styles/error.scss"
import "./Styles/loading.scss"

import "bootstrap"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
