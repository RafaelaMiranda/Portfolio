import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { inject } from '@vercel/analytics';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

inject();
