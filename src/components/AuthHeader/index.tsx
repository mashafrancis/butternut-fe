import { Icon } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import * as React from 'react';

// components
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

// styles
import './AuthHeader.scss';

// interfaces
import { AuthHeaderProps } from './interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const backArrow = link => (
  <React.Fragment>
    <NavLink to={link}>
      <span className="back-button">
        <Icon>keyboard_backspace</Icon>
      </span>
    </NavLink>
  </React.Fragment>
);

const AuthHeader: React.FunctionComponent<AuthHeaderProps> = (props) => {
  const classes = useStyles(props);
  return (
    <Container maxWidth="lg" className="authheader">
      <header>
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-evenly"
          >
            <Grid item xs={2}>
              {backArrow('/')}
            </Grid>
            <Grid container alignItems="center" item xs={10}>
              <h1>{props.title}</h1>
            </Grid>
          </Grid>
        </div>
      </header>
    </Container>
  );
};

export default AuthHeader;
