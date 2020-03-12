// react libraries
import * as React from 'react';

// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import PageNotFound from '@components/PageNotFound';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import RegistrationPage from '@pages/RegistrationPage';

const Routes = () => (
  <Route>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
  </Route>
);

export default Routes;
