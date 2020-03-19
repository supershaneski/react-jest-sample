import React, {createRef} from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  //const enzymeWrapper = shallow(<App {...props} />)
  const enzymeWrapper = shallow(
  <Provider store={store}>
    <App />
  </Provider>)

  return {
    enzymeWrapper,
  }
}

describe('Components', () => {
    
  describe('App', () => {
      
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('Header').hasClass('app')).toBe(true)
      //expect(enzymeWrapper.find('div').hasClass('app')).toBe(true)
      
    })
    
  })

})
