// import React from 'react'
// import { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import globalStyles from './globalStyle.module.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App.jsx';
import globalStyles from './globalStyle.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/hss_project">  {/* Set the basename here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

