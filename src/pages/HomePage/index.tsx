import * as React from 'react';

// interfaces
import { HomePageProps, HomePageState } from './interfaces';

// styles
import './HomePage.scss';

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const [state, setState] = React.useState<HomePageState>({});
  return (
    <React.Fragment>
      <h2>Butternut!</h2>
    </React.Fragment>
  );
};

export default HomePage;
