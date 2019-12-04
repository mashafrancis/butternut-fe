// react library
import * as React from 'react';

// third-party libraries
import SvgIcon from '@material-ui/core/SvgIcon';

// styles
import './PageNotFound.scss';

// Interfaces
import { PageNotFoundProps } from './interfaces';

/**
 * Renders the page not found error message
 *
 * @returns {JSX}
 */
const PageNotFound: React.FunctionComponent<PageNotFoundProps> = props =>  (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404"/>
      <h1>404</h1>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily
        unavailable</p>
        <button onClick={props.history.goBack} className="mdc-button mdc-button--raised">
          <SvgIcon>
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
          </SvgIcon>
          <span className="mdc-button__label">Back</span>
        </button>
    </div>
  </div>
);

export default PageNotFound;
