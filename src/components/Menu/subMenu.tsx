import React,{useContext, useState} from 'react'
import classNames from "classnames";
import {MenuContxt} from './menu'
import {MenuItemProps} from './menuItem'

export interface SubMenuProps {
    className?:string;
    index?:number;
    title:string;
    children?: React.ReactNode;
}

const SubMenu = ({className,title,children,index}:SubMenuProps)=>{
    const context = useContext(MenuContxt);
    const [menuOpen,setMenuOpen] = useState(false)
    const classes = classNames('menu-item submenu-item', className,{
        'is-active':context.index === index,
    })
    const handleClick = () => {
        setMenuOpen(!menuOpen)
      }
    const renderChildren =()=>{
        const subMenuClasses = classNames('f-submenu',{
            'menu-opened':menuOpen
        })
        const childrenComponent = React.Children.map(children,(child,i)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName==='MenuItem'){
                return childElement
            }else{
                console.warn('Warning:Menu has a child which is not a MenuItem Components')
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes}>
            <div className='submenu-title' onClick={handleClick}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu';
export default SubMenu;