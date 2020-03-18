import React from 'react';
import { render } from '@testing-library/react';
//import store from '../redux/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/my guestbook/i);
  expect(linkElement).toBeInTheDocument();
});
