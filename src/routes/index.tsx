// react libraries
import * as React from 'react';

// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import HomePage from '@pages/HomePage';
import PageNotFound from '@components/PageNotFound';

const Routes = () => (
  <Route>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
  </Route>
);

export default Routes;
