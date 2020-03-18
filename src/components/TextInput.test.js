import React, {createRef} from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
    
    test("Label will be shown", () => {
        const { getByText } = render(<TextInput label="MyLabel1" />);
        const textElement = getByText(/mylabel1/i);
        expect(textElement).toBeInTheDocument();
    });

    test("Value will be shown and onChange triggered", () => {
        const inputRef = createRef();
        
        const func = {
            callback: function() { return }
        }

        const text = "hello world"
        const component = render(
            <TextInput 
                inputRef={inputRef} 
                onChange={() => func.callback()}
                value={text} />
        );
        
        const inputNode = inputRef.current;
        
        jest.spyOn(func, 'callback');
        
        expect(inputNode.value).toEqual(text);
        
        TestUtils.Simulate.change(inputNode);
        expect(func.callback).toHaveBeenCalled();

    });

    test("If Error is TRUE will show error class and message", () => {
        const inputRef = createRef();
        const labelRef = createRef();
        
        const errorFlag = true;
        const component = render(
            <TextInput 
                inputRef={inputRef}
                labelRef={labelRef} 
                label={'MyLabel1'}
                error={errorFlag}
                errorMessage={'This is Error'}
            />
        );
        
        const inputNode = inputRef.current;
        const labelNode = labelRef.current;
        
        expect(inputNode.className).toContain('errorInput');
        expect(labelNode.className).toContain('error');
        
        expect(labelNode.textContent).toContain('MyLabel1 (This is Error)');
        
    });

});