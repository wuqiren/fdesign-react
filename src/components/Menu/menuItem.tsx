import React from 'react'
import classnames from 'classnames'



interface MenuItemProps {
  index?: number,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties,
  children?:React.ReactNode
  
}
const MenuItem = (props: MenuItemProps) => {
  const {index, className, disabled,style,children } = props;
  const classes = classnames('menu-item',className, {
    'is-disabled':disabled,
  })
  return <li style={style} className={classes}>
    {children}
  </li>
}
export default MenuItem