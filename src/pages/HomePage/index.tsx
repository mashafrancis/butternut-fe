import * as React from 'react';

// components
import { GridContainer, GridItem } from '@components/Grid';
import Header from '@components/Header';
import HeaderLinks from '@components/Header/HeaderLinks';
import Parallax from '@components/Parallax';
import { makeStyles } from '@material-ui/core/styles';

// interfaces
import { HomePageProps } from './interfaces';

// styles
import styles from '@pages/HomePage/HomePageStyles';

// @ts-ignore
const useStyles = makeStyles(styles);

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand="Food Set Go"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
        />
        <Parallax
          filter
          image={'https://res.cloudinary.com/almondgreen/image/upload/v1579012907/Butternut/burgers_zmumku.jpg'}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Order food faster & easier</h1>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
    </div>
  );
};

export default HomePage;
