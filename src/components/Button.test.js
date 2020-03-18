import React, {createRef} from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {

    test("Button will show text", () => {
        const { getByText } = render(<Button>Button Text</Button>);
        const textElement = getByText(/button text/i);
        expect(textElement).toBeInTheDocument();
    });

    test("Button will change class on Mouse Events", () => {
        const buttonRef = createRef();
        
        const component = render(
            <Button buttonRef={buttonRef}>Click</Button>
        );

        const buttonNode = buttonRef.current;
        expect(buttonNode.className).toContain('normal');

        TestUtils.Simulate.mouseOver(buttonNode);
        expect(buttonNode.className).toContain('hover');
        
        TestUtils.Simulate.mouseOut(buttonNode);
        expect(buttonNode.className).toContain('normal');
        
        TestUtils.Simulate.mouseDown(buttonNode);
        expect(buttonNode.className).toContain('active');

        TestUtils.Simulate.mouseUp(buttonNode);
        expect(buttonNode.className).toContain('hover');

    });

    test("Button will execute onClick callback", () => {
        
        const func = {
            callback: function() { return }
        }

        const buttonRef = createRef();
        const component = render(
            <Button 
                buttonRef={buttonRef}
                onClick={() => func.callback()}
            >Click</Button>
        );

        const buttonNode = buttonRef.current;

        jest.spyOn(func, 'callback');

        TestUtils.Simulate.click(buttonNode);
        expect(func.callback).toHaveBeenCalled();
        
    });

});