import * as React from 'react';

// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import Button from '@components/Button';

import styles from '@components/Header/HeaderLinkStyles';

// @ts-ignore
const useStyles = makeStyles(styles);

export const HeaderLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Link to={'/register'}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="register"
            title="Create a new account"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              className={classes.navLink}
            >
              <h3>Register</h3>
            </Button>
          </Tooltip>
        </ListItem>
      </Link>
      <Link to={'/login'}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="login"
            title="Login into your account"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              className={classes.navLink}
            >
              <h3>Login</h3>
            </Button>
          </Tooltip>
        </ListItem>
      </Link>
    </List>
  );
};

export default HeaderLinks;
