import { GridContainerProps } from '@components/Grid/interfaces';
import * as React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
};

const useStyles = makeStyles(styles);

export const GridContainer: React.FunctionComponent<GridContainerProps> = (props) => {
  const classes = useStyles(props);
  const { children, className, ...rest } = props;
  return (
    // tslint:disable-next-line:prefer-template
    <Grid container {...rest} className={classes.grid + ' ' + className}>
    {children}
    </Grid>
  );
};
