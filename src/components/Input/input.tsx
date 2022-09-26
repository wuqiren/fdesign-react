import React,{ReactElement,InputHTMLAttributes,ChangeEvent} from 'react'
import classNames from 'classnames';
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg'|'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
    className?:string;
    disabled?:boolean;
    size?:InputSize;
    icon?:IconProp;
    prepend?:string| ReactElement;
    append?:string|ReactElement;
    onChange?:(e:ChangeEvent<HTMLInputElement>)=>void
}
const Input =(props:InputProps)=>{

    const {disabled,size,icon,prepend,append,style,...restProps} = props;
    const cnames = classNames('viking-input-wrapper',{
        [`input-size-${size}`]:size,
        'is-disabled':disabled,
        'input-group':prepend||append,
        'input-group-append':!!append,
        'input-group-prepend':!!prepend
    })
    return <div className={cnames} style={style} >
        {prepend && <div className='viking-input-group-preped'>{prepend}</div>}
        {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`} /></div>}
        <input
            className='viking-input-inner'
            disabled={disabled}
            {...restProps}
        />
        {append && <div className='viking-input-group-append'>{append}</div>}
    </div>
}
export default Input
