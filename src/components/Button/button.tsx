import React from 'react';
import classnames from 'classnames';
import { type } from '@testing-library/user-event/dist/type';

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
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button = (props: ButtonProps) => {
  const { btnType, className, size, disabled, children, href,...restProps } = props;
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}
      {...restProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button   {...restProps} className={classes} disabled={disabled}>
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
