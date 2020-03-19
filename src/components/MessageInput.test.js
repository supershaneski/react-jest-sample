import React, {createRef} from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import * as TestUtils from 'react-dom/test-utils';
//import { render } from '@testing-library/react';
import MessageInput from './MessageInput';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    
    const props = {
        show: false,
        onClose: jest.fn(),
        onSubmit: jest.fn()
    }

    const enzymeWrapper = shallow(<MessageInput {...props} />)
    
    return {
        props,
        enzymeWrapper
    }
}

describe('MessageInput', () => {

    describe('Visibility', () => {
        
        it('should change class to show/hide component using show prop.', () => {
            const { enzymeWrapper } = setup();
            
            // Hidden by default
            expect(enzymeWrapper.find('div').first().hasClass('hidden')).toBe(true);
            
            // Visible if show prop is true
            enzymeWrapper.setProps({ show: true });
            enzymeWrapper.update();
            expect(enzymeWrapper.find('div').first().hasClass('visible')).toBe(true);
            
            // Hidden if show prop is false
            enzymeWrapper.setProps({ show: false });
            enzymeWrapper.update();
            expect(enzymeWrapper.find('div').first().hasClass('hidden')).toBe(true);
            
        })

        it("should call onClose event if Cancel button is clicked.", () => {
            const { enzymeWrapper, props } = setup();
            const cancelButton = enzymeWrapper.find('Button').last();

            cancelButton.props().onClick();
            expect(props.onClose.mock.calls.length).toBe(1);

        })

        it("should show error when either Name or Message is missing after Submit button", () => {
            const { enzymeWrapper, props } = setup();

            const submitButton = enzymeWrapper.find('Button').first();
            
            const nameText = enzymeWrapper.find('TextInput').first();
            const messageText = enzymeWrapper.find('TextArea');
            
            // no name and message
            submitButton.props().onClick();
            expect(enzymeWrapper.state().errorName).toBe(true);
            expect(enzymeWrapper.state().errorMessage).toBe(true);
            
            // with name and no message
            nameText.simulate("change", { target: { value: "John Doe" }})
            
            submitButton.props().onClick();
            expect(enzymeWrapper.state().errorName).toBe(false);
            expect(enzymeWrapper.state().errorMessage).toBe(true);
            
            // no name and with message
            nameText.simulate("change", { target: { value: "" }})
            messageText.simulate("change", { target: { value: "This is message." }})
            
            submitButton.props().onClick();
            expect(enzymeWrapper.state().errorName).toBe(true);
            expect(enzymeWrapper.state().errorMessage).toBe(false);
            
        })

        it("should not call onSubmit event if Submit button is clicked and there is no Name or Message.", () => {
            const { enzymeWrapper, props } = setup();

            const nameText = enzymeWrapper.find('TextInput').first();
            const titleText = enzymeWrapper.find('TextInput').last();
            const messageText = enzymeWrapper.find('TextArea');
            
            const submitButton = enzymeWrapper.find('Button').first();
            
            // no values
            submitButton.props().onClick();
            expect(props.onSubmit.mock.calls.length).toBe(0);
            
            // only title
            titleText.simulate("change", { target: { value: "Congrats!" }})
            
            submitButton.props().onClick();
            expect(props.onSubmit.mock.calls.length).toBe(0);
            
            // name and title
            nameText.simulate("change", { target: { value: "John Doe" }})
            titleText.simulate("change", { target: { value: "Congrats!" }})
            
            submitButton.props().onClick();
            expect(props.onSubmit.mock.calls.length).toBe(0);
            
            // title and message
            nameText.simulate("change", { target: { value: "" }})
            titleText.simulate("change", { target: { value: "Congrats!" }})
            messageText.simulate("change", { target: { value: "My message here." }})
            
            submitButton.props().onClick();
            expect(props.onSubmit.mock.calls.length).toBe(0);

        })

        it("should call onSubmit event if Submit button is clicked if both Name and Message.", () => {
            const { enzymeWrapper, props } = setup();

            const nameText = enzymeWrapper.find('TextInput').first();
            const titleText = enzymeWrapper.find('TextInput').last();
            const messageText = enzymeWrapper.find('TextArea');
            
            const submitButton = enzymeWrapper.find('Button').first();
            
            // name and message
            nameText.simulate("change", { target: { value: "John Doe" }})
            titleText.simulate("change", { target: { value: "" }})
            messageText.simulate("change", { target: { value: "My message here." }})
            
            submitButton.props().onClick();
            expect(props.onSubmit.mock.calls.length).toBe(1);

            // name, title and message
            nameText.simulate("change", { target: { value: "John Doe" }})
            titleText.simulate("change", { target: { value: "Congrats!" }})
            messageText.simulate("change", { target: { value: "My message here." }})
            
            submitButton.props().onClick();
            expect(props.onSubmit.mock.calls.length).toBe(2);

        })

    })

})
