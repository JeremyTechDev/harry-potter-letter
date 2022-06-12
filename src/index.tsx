import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
// import './fonts/title.ttf';
// import './fonts/handwritten.ttf';
// import './fonts/harry-potter.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
