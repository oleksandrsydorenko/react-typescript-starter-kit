import React from 'react';
import { render } from 'react-dom';

import '@styles/main.scss';
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
