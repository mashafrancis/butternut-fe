import * as React from 'react';
import classnames from 'classnames';

import {CSS_CLASSES} from './constant';

export type Alignment = 'left' | 'right';
export interface GridProps<T> extends React.HTMLProps<T> {
  align?: Alignment;
  className?: string;
  fixedColumnWidth?: boolean;
  tag?: string;
}

const Grid: <T extends {} = HTMLDivElement>(props: GridProps<T>) => React.ReactElement<any> = ({
  align,
  children,
  className = '',
  fixedColumnWidth = false,
  tag: Tag = 'div',
  ...otherProps
}) => {
  const classes = classnames(CSS_CLASSES.ROOT, className, {
    [`${CSS_CLASSES.ALIGN}-${align}`]: !!align,
    [CSS_CLASSES.FIXED_COLUMN_WIDTH]: fixedColumnWidth,
  });
  return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag className={classes} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Grid;
