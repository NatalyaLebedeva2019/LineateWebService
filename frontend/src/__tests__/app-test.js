import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { toBeInTheDocument } from '@testing-library/jest-dom';
import App from '../App';

import store from '../store';

test('full render/init navigation', () => {
  const { getByText } = render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );

  fireEvent.click(getByText('Sign up'));
  expect(getByText('Register')).toBeInTheDocument();

  fireEvent.click(getByText('Log in'));
  expect(getByText('Login')).toBeInTheDocument();
});
