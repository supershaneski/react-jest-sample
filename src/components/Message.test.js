import React, {createRef} from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Message from './Message';

Enzyme.configure({ adapter: new Adapter() })

describe('Message', () => {

    var wrapper;

    beforeEach(()=>{
        wrapper = shallow((
            <Message
                author={'john doe'}
                title={'untitled'}
            >This is a text</Message>
        ))
    })

    test("Will render properly", () => {
        
        expect(wrapper.contains(<div className="author">john doe</div>)).toBe(true)
        
        expect(wrapper.contains(<h4 className="title">untitled</h4>)).toBe(true)
        
        expect(wrapper.contains(<p>This is a text</p>)).toBe(true)
        
    });

});