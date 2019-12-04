import * as React from 'react';

// nodejs library to set properties for components
import Grid from '@material-ui/core/Grid';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// interfaces
import { GridItemProps } from '@components/Grid/interfaces';

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
};

// @ts-ignore
const useStyles = makeStyles(styles);

export const GridItem = (props) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    // tslint:disable-next-line:prefer-template
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
};
