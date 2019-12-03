import * as React from 'react';
import classnames from 'classnames';

import { CSS_CLASSES, DEVICE_TYPE } from './constant';

export type TwelveColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FourColumn = 1 | 2 | 3 | 4;
export type EightColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Alignment = 'bottom' | 'middle' | 'top';

export interface CellProps<T> extends React.HTMLProps<T> {
  align?: Alignment;
  className?: string;
  columns?: TwelveColumn;
  desktopColumns?: TwelveColumn;
  order?: TwelveColumn;
  phoneColumns?: FourColumn;
  tabletColumns?: EightColumn;
  tag?: string;
}

const Cell: <T extends {} = HTMLDivElement>(props: CellProps<T>) => React.ReactElement<any> = ({
  align,
  children,
  className = '',
  columns,
  desktopColumns,
  order,
  phoneColumns,
  tabletColumns,
  tag: Tag = 'div',
  ...otherProps
}) => {
  const classes = classnames(CSS_CLASSES.CELL, className, {
    [`${CSS_CLASSES.CELL_ALIGN}-${align}`]: !!align,
    [`${CSS_CLASSES.CELL_ORDER}-${order}`]: !!order,
    [`${CSS_CLASSES.CELL_SPAN}-${columns}`]: !!columns,
    [`${CSS_CLASSES.CELL_SPAN}-${desktopColumns}-${DEVICE_TYPE.DESKTOP}`]: !!desktopColumns,
    [`${CSS_CLASSES.CELL_SPAN}-${phoneColumns}-${DEVICE_TYPE.PHONE}`]: !!phoneColumns,
    [`${CSS_CLASSES.CELL_SPAN}-${tabletColumns}-${DEVICE_TYPE.TABLET}`]: !!tabletColumns,
  });

  return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag className={classes} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Cell;
