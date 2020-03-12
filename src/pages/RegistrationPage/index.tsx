import * as React from 'react';

// components
import { RegistrationPageForm } from '@components/AccountPageForms/RegistrationPageForm';
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// interfaces
import { RegistrationPageProps } from './interfaces';

// styles
import { useAccountPageStyles } from '@components/AccountPageForms/AccountPageFormStyles';

const RegistrationPage: React.FunctionComponent<RegistrationPageProps> = (props) => {
  const classes = useAccountPageStyles(props);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={8} className={classes.image}/>
      <RegistrationPageForm/>
    </Grid>
  );
};

export default RegistrationPage;
