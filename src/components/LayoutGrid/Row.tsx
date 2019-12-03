import * as React from 'react';
import classnames from 'classnames';

import {CSS_CLASSES} from './constant';

export interface RowProps<T> extends React.HTMLProps<T> {
  className?: string;
  tag?: string;
}

const Row: <T extends {} = HTMLDivElement>(props: RowProps<T>) => React.ReactElement<any> = ({
  children = '',
  className,
  tag: Tag = 'div',
  ...otherProps
}) => {
  const classes = classnames(CSS_CLASSES.INNER, className);

  return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag className={classes} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Row;
