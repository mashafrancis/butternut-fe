// react libraries
import * as React from 'react';

// components
import Routes from '../routes';

// interfaces
import { AppProps, AppState } from './interfaces';

export class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
}

export default (App);
