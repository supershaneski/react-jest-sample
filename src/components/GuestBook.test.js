import React, { createRef } from 'react';
import { Provider } from 'react-redux';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson, {renderToJson, mountToJson} from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectBook, { GuestBook } from './GuestBook';


Enzyme.configure({ adapter: new Adapter() });

describe('GuestBook', () => {

    describe("Check component rendering depending on initial state.", () => {
        
        test('No initial data', () => {
            
            const mockStore = configureStore();
            const store = mockStore({ messages: [] })
            const wrapper = render(<Provider store={store}><ConnectBook /></Provider>);
            expect(renderToJson(wrapper)).toMatchSnapshot()

        })

        test('Initial data exists', () => {
            
            let initialState = {
                messages: [
                    { id: 'id1', author: 'namae1', title: 'title1', text: 'message1'},
                    { id: 'id2', author: 'namae2', title: 'title2', text: 'message2'}
                ]
            }
            
            const mockStore = configureStore();
            const store = mockStore(initialState)
            const wrapper = render(<Provider store={store}><ConnectBook /></Provider>);
            expect(renderToJson(wrapper)).toMatchSnapshot()
            
        })

    })
    

});