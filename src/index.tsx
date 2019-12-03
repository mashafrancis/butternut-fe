// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App/index';

export const app = ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') || document.createElement('div')
);

export default app;
