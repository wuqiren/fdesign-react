import React from 'react';
import classnames from 'classnames';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';
type ButtonSize = 'lg' | 'sm';
interface BaseButtonProps {
  className?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  href?: string;
}

const Button = (props: BaseButtonProps) => {
  const { btnType, className, size, disabled, children, href } = props;
  const classes = classnames('f-btn', className, {
    [`f-btn-${btnType}`]: btnType,
    [`f-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};
export default React.memo(Button);
