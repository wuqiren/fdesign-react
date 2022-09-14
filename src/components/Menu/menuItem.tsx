import React,{useContext} from 'react'
import classnames from 'classnames'
import {MenuContxt} from './menu'


interface MenuItemProps {
  index: number,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties,
  children?:React.ReactNode
}
const MenuItem = (props: MenuItemProps) => {
  const { index, className, disabled, style, children } = props;
  const context = useContext(MenuContxt)
  const classes = classnames('menu-item',className, {
    'is-disabled': disabled,
    'is-active':context.index===index
  })
  const handleClick = () => {
    if (context.onSelect) {
      context.onSelect(index)
    }
  }
  return <li style={style} className={classes} onClick={handleClick}>
    {children}
  </li>
}
export default MenuItem