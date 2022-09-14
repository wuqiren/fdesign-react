import React,{useState,createContext} from 'react'
import classnames from 'classnames'


type MenuMode = 'vertical' | 'horizontal' | 'inline'
type SelectBack = (selectedIndex: number) => void;
export interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  defaultIndex?: number;
  children?: React.ReactNode;
  onSelect?: SelectBack;
}
interface IMenuContext {
  index: number;
  onSelect?: SelectBack;
}
export const MenuContxt = createContext<IMenuContext>({index:0 })
const Menu = (props: MenuProps) => {
  const { className, mode, style, defaultIndex, children, onSelect } = props;
  const [currentActive,setIsActive] = useState(defaultIndex)
  
  const classes = classnames('f-menu', className, {
    'menu-vertical':mode === 'vertical'
  })
  const handleClick = (index:number) => {
    setIsActive(index);
    onSelect && onSelect(index);
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect:handleClick
  }
 
  return <ul style={style} className={classes} data-testid='test-menu'>
    <MenuContxt.Provider value={passedContext}>
      {children}
    </MenuContxt.Provider>
  </ul>
}
Menu.defaultProps = {
  mode: 'vertical',
  defaultIndex:0,
}
export default Menu;