import React from 'react';
import { render } from 'react-dom';

import 'styles/resets.scss';
import env from 'constants/env';
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (env.isDevelopment && module.hot) {
  module.hot.accept();
}
