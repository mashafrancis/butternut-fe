import Paper from '@material-ui/core/Paper';
import * as React from 'react';

// components
import { LoginPageForm } from '@components/AccountPageForms';
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// interfaces
import { RegistrationPageProps } from './interfaces';

const viewPort = window.innerWidth;

// styles
import { useAccountPageStyles } from '@components/AccountPageForms/AccountPageFormStyles';
import './LoginPage.scss';

const LoginPage: React.FunctionComponent<RegistrationPageProps> = (props) => {
  const classes = useAccountPageStyles(props);
  return (
    <Grid container component="main" className={`${classes.root} acc-backdrop`}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={8} className={classes.image}/>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square className="acc-backdrop__back">
        {
          (viewPort < 536) ?
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square className="acc-backdrop__front">
              <LoginPageForm/>
            </Grid>
            :
            <LoginPageForm/>
        }
      </Grid>
    </Grid>
  );
};

export default LoginPage;
