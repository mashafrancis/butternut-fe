// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App/index';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') || document.createElement('div')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function (registration) {
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function (err) {
      console.log('Service Worker registration failed: ', err);
    });
}
