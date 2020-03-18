import React, {createRef} from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import MessageInput from './MessageInput';

describe('MessageInput', () => {
    
    var node, component, containerRef, containerNode;
    
    beforeEach(function(){
        node = document.createElement('div');
        containerRef = createRef();
        component = render(<MessageInput 
            containerRef={containerRef} 
            show={true} />, node);
        
    });

    test("If show prop is true, component will be shown.", () => {
        containerNode = containerRef.current;
        expect(containerNode.className).toContain("visible");
    })

    it("should change to hidden, when show prop is set to false", () => {
        render(<MessageInput 
            containerRef={containerRef} 
            show={false} />, node);
        
        containerNode = containerRef.current;
        expect(containerNode.className).toContain("hidden");
    })
    
});
