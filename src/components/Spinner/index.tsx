// import react library
import * as React from 'react';

// style
import './Spinner.scss';

// interface
import { SpinnerProps } from './interfaces';

const Spinner = (props: SpinnerProps) => {
  return (
    <div className={`spinner ${props.size ? props.size : ''}`} />
  );
};

export default Spinner;
