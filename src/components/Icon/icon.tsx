import classNames  from "classnames";

import {FontAwesomeIcon,FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primart' | 'secondary' |'sucess' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps{
    theme?:ThemeProps,
}

const Icon = (props:IconProps)=>{
    const {className,theme,...restProps} = props;
    const classes = classNames('vikig-icon',className,{
        [`icon-${theme}`]:theme
    })

    return <FontAwesomeIcon className={classes} {...restProps}/>
}

export default Icon;