import React, { ReactElement,useState,useRef } from 'react'
import classNames from 'classnames'
import Input,{InputProps} from '../Input/input'


interface DataSourceObject{
    value:string;
}
export type DataSourceType< T= {}>=T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
    fetchSuggestions:(str:string)=>DataSourceObject[] | Promise<DataSourceType[]>;
    onSelect?:(item:DataSourceType)=>void;
    renderOption?:(item:DataSourceType)=>ReactElement;
}

export const AutoComplete =(props:AutoCompleteProps)=>{
    const {
        fetchSuggestions,
        onSelect,
        value,
        renderOption,
        ...restProps
    } = props
    const [inputValue,setInputValue] = useState(value as string)
    const [suggestions,setSuggestions] = useState<DataSourceType[]>([])
    const [loading,setLoadig] = useState(false)
    const [showDropdown,setShowDropdown]= useState(false)
    const [highlightIndex,setHighlightIndex] = useState(-1);
    const triggerSearch = useRef(false)
    const componentRef = useRef<HTMLDivElement>(null);
    
}