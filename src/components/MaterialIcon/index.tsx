import * as React from 'react';
import classnames from 'classnames';
import {
  withRipple,
  InjectedProps,
  RippledComponentProps, // eslint-disable-line @typescript-eslint/no-unused-vars
} from '@material/react-ripple';

export interface MaterialIconDefaultProps
  extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  className?: string;
  hasRipple?: boolean;
  unbounded?: boolean;
}

export interface MaterialIconProps extends MaterialIconDefaultProps, InjectedProps<HTMLElement> {}

const MaterialIconDefault: React.FunctionComponent<MaterialIconProps> = ({
  className,
  icon,
  initRipple,
  hasRipple,
  unbounded, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...otherProps
}) => {
  const classes = classnames('material-icons', className, {
    'material-icons--ripple-surface': hasRipple,
  });
  return (
    <i className={classes} ref={initRipple} {...otherProps}>
      {icon}
    </i>
  );
};

export const RippleMaterialIcon = withRipple<MaterialIconProps, HTMLElement>(
  MaterialIconDefault
);

export default class MaterialIcon extends React.Component<MaterialIconProps, {}> {
  static defaultProps: Partial<MaterialIconProps> = {
    icon: '',
    className: '',
    hasRipple: false,
    unbounded: false,
  };

  render() {
    const {icon, hasRipple, unbounded, ...otherProps} = this.props; // eslint-disable-line @typescript-eslint/no-unused-vars
    if (hasRipple) {
      return (
        <RippleMaterialIcon unbounded hasRipple icon={icon} {...otherProps} />
      );
    }
    return <MaterialIconDefault icon={icon} {...otherProps} />;
  }
}
