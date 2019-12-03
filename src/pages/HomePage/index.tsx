import * as React from 'react';

// components
import { Logo } from '@components/Logo';
import { Grid } from '@components/LayoutGrid';

// interfaces
import { HomePageProps, HomePageState } from './interfaces';

// styles
import './HomePage.scss';

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const [state, setState] = React.useState<HomePageState>({});
  return (
    <React.Fragment>
      <div className="authentication">
        <Grid>
          <Logo />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
