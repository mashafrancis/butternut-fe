import * as React from 'react';

// third party applications
import classNames from 'classnames';

// interfaces
import { ButtonProps } from '@components/Button/interfaces';

// @material-ui/core components
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

// core components
import buttonStyles from '@components/Button/ButtonStyles';

// @ts-ignore
const makeComponentStyles = makeStyles(buttonStyles);

const RegularButton = React.forwardRef((props: ButtonProps, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });

  return (
    // @ts-ignore
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

export default RegularButton;
