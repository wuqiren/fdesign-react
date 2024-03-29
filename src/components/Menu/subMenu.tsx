import React,{useContext, useState} from 'react'
import classNames from "classnames";
import {MenuContxt} from './menu'
import {MenuItemProps} from './menuItem'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition';
export interface SubMenuProps {
    className?:string;
    index?:string;
    title:string;
    children?: React.ReactNode;
}

const SubMenu = ({className,title,children,index}:SubMenuProps)=>{
    const context = useContext(MenuContxt);
    const openedSubMenus = context.defaultOpenMenus as Array<string>
    const isOpend = (index && context.mode==='vertical')? openedSubMenus?.includes(index):false
    const [menuOpen,setMenuOpen] = useState(isOpend)
    const classes = classNames('menu-item submenu-item', className,{
        'is-active':context.index === index,
        'is-opened':menuOpen,
        'is-vertical':context.mode==='vertical'
    })
    const handleClick = (e:React.MouseEvent) => {
        e.preventDefault()
        setMenuOpen(!menuOpen)
    }
    let timer:any;
    const handleMouse = (e:React.MouseEvent,toggle:boolean)=>{
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setMenuOpen(toggle)
        }, 300);
    }
    const clickEvent = context.mode==='vertical'?{
        onClick:handleClick
    }:{}
    const hoverEvent = context.mode !=='vertical'?{
        onMouseEnter:(e:React.MouseEvent)=>{ handleMouse(e,true)},
        onMouseLeave:(e:React.MouseEvent)=>{handleMouse(e,false)}
    }:{}
    const renderChildren =()=>{
        const subMenuClasses = classNames('f-submenu',{
            'menu-opened':menuOpen
        })
        const childrenComponent = React.Children.map(children,(child,i)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem'){
                return React.cloneElement(childElement,{index:`${index}-${i}`})
            }else{
                console.warn('Warning:Menu has a child which is not a MenuItem Components')
            }
        })
        return (
            <Transition in={menuOpen} timeout={300} annimationn='zoom-in-top' >
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
            </Transition>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvent}>
            <div className='submenu-title' {...clickEvent}>
                {title}
                <Icon  icon='angle-down' className='arrow-icon'/>
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu';
export default SubMenu;