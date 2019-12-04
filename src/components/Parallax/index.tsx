import { ParallaxProps } from '@components/Parallax/interfaces';
import * as React from 'react';

// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// core components
import styles from '@components/Parallax/ParallaxStyles';

// @ts-ignore
const useStyles = makeStyles(styles);

export const Parallax: React.FunctionComponent<ParallaxProps> = (props) => {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });
  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        // @ts-ignore
        ...style,
        transform,
        // tslint:disable-next-line:prefer-template
        backgroundImage: 'url(' + image + ')',
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
