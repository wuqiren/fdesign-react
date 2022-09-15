import React,{useState,createContext} from 'react'
import classnames from 'classnames'
import { MenuItemProps} from './menuItem'

type MenuMode = 'vertical' | 'horizontal'
type SelectBack = (selectedIndex: string) => void;
export interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  defaultIndex?: string;
  children?: React.ReactNode;
  onSelect?: SelectBack;
  defaultOpenMenus?:string[];
}
interface IMenuContext {
  index: string;
  onSelect?: SelectBack;
  mode?:string;
  defaultOpenMenus?:string[];
}
export const MenuContxt = createContext<IMenuContext>({index:'0' })
const Menu = (props: MenuProps) => {
  const { className, mode, style, defaultIndex, children, onSelect,  defaultOpenMenus} = props;
  const [currentActive,setIsActive] = useState(defaultIndex)

  const classes = classnames('f-menu', className, {
    'menu-vertical':mode === 'vertical',
    'menu-horizontal':mode !=='vertical'
  })
  const handleClick = (index:string) => {
    setIsActive(index);
    onSelect && onSelect(index);
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect:handleClick,
    mode,
    defaultOpenMenus
  }
 
  const renderChildren =()=>{
    return React.Children.map(children,(child,index)=>{
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const {displayName} = childElement.type;
      if(displayName==='MenuItem' || displayName==='SubMenu'){
        return React.cloneElement(childElement,{index:index.toString()})
      }else{
        console.warn('Warning:Menu has a child which is not a MenuItem Components')
      }
    })
  }
  return <ul style={style} className={classes} data-testid='test-menu'>
    <MenuContxt.Provider value={passedContext}>
      {renderChildren()}
    </MenuContxt.Provider>
  </ul>
}
Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex:'0',
}
export default Menu;