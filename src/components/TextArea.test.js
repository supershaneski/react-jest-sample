import React, {createRef} from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
    
    test("Label will be shown", () => {
        const { getByText } = render(<TextArea label="MyLabel1" />);
        const textElement = getByText(/mylabel1/i);
        expect(textElement).toBeInTheDocument();
    });

    test("Value will be shown and onChange triggered", () => {
        const textRef = createRef();
        
        const func = {
            callback: function() { return }
        }

        const text = "hello world"
        const component = render(
            <TextArea 
                textRef={textRef} 
                onChange={() => func.callback()}
                value={text} />
        );
        
        const textNode = textRef.current;
        
        jest.spyOn(func, 'callback');
        
        expect(textNode.value).toEqual(text);
        
        TestUtils.Simulate.change(textNode);
        expect(func.callback).toHaveBeenCalled();
        
    });

    test("If Error is TRUE will show error class and message", () => {
        const textRef = createRef();
        const labelRef = createRef();
        
        const errorFlag = true;
        const component = render(
            <TextArea 
                textRef={textRef}
                labelRef={labelRef} 
                label={'MyLabel1'}
                error={errorFlag}
                errorMessage={'This is Error'}
            />
        );
        
        const textNode = textRef.current;
        const labelNode = labelRef.current;
        
        expect(textNode.className).toContain('errorText');
        expect(labelNode.className).toContain('error');
        
        expect(labelNode.textContent).toContain('MyLabel1 (This is Error)');
        
    });

});