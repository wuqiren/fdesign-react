import React,{useState,createContext} from 'react'
import classnames from 'classnames'


type MenuMode = 'vertical' | 'horizontal' | 'inline'
type SelectBack = (selectedIndex: number) => void;
interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  defaultIndex?: number;
  children: React.ReactNode;
  onSelect?: SelectBack;
}
interface IMenuContext {
  index?: number;
  onSelect?: SelectBack;
}
export const MenuContxt = createContext<IMenuContext>({index:0 })
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