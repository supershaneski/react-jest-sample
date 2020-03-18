import React, {createRef} from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import AddButton from './AddButton';

describe('AddButton', () => {

    test("AddButton will change class on Mouse Events", () => {
        const buttonRef = createRef();
        
        const component = render(
            <AddButton buttonRef={buttonRef} />
        );

        const buttonNode = buttonRef.current;
        expect(buttonNode.className).toContain('default');

        TestUtils.Simulate.mouseOver(buttonNode);
        expect(buttonNode.className).toContain('hover');
        
        TestUtils.Simulate.mouseOut(buttonNode);
        expect(buttonNode.className).toContain('default');
        
        TestUtils.Simulate.mouseDown(buttonNode);
        expect(buttonNode.className).toContain('active');

        TestUtils.Simulate.mouseUp(buttonNode);
        expect(buttonNode.className).toContain('hover');

    });

    test("AddButton will execute onClick callback", () => {
        
        const func = {
            callback: function() { return }
        }

        const buttonRef = createRef();
        const component = render(
            <AddButton 
                buttonRef={buttonRef}
                onClick={() => func.callback()}
            />
        );

        const buttonNode = buttonRef.current;

        jest.spyOn(func, 'callback');
        
        TestUtils.Simulate.click(buttonNode);
        expect(func.callback).toHaveBeenCalled();
        
    });

});