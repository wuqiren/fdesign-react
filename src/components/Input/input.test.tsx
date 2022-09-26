import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import Input,{InputProps} from './input';

const defaultProps:InputProps={
    onChange:jest.fn(),
    placeholder:'test-input'
}

describe('test Input component',()=>{
    it('should render the correct default Input',()=>{
        const wrapper = render(<Input {...defaultProps}/>)
        const testNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement
        expect(testNode).toBeInTheDocument();
        expect(testNode).toHaveClass('viking-input-inner');
        fireEvent.change(testNode,{target:{value:'23'}})
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(testNode.value).toEqual('23')
    })
    it('should rennder the disabled Input on disabled property',()=>{
        const wrapper = render(<Input disabled placeholder='disabled'/>)
        const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement
        expect(testNode.disabled).toBeTruthy()
    })
})