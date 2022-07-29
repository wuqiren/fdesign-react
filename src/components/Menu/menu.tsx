import React from 'react'
import classnames from 'classnames'


type MenuMode = 'vertical' | 'horizontal' | 'inline'

interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  defaultIndex?: number;
  children: React.ReactNode;
  onSelect?: (selectedIndex: number) => void;
  
}
const Menu = (props: MenuProps) => {
  const { className, mode, style, defaultIndex,children } = props;
  const classes = classnames('f-menu',className, {
    
  })
  return <ul style={style} className={classes}>
    {children}
  </ul>
}
Menu.defaultProps = {
  mode: 'vertical',
  defaultIndex:0,
}
export default Menu;