import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { toHaveAttribute } from '@testing-library/jest-dom';
import rootReducer from '../store/reducer';
import Auth from '../scenes/Auth';

let store = createStore(rootReducer);

describe('Login form', () => {
  afterEach(() => {
    store = createStore(rootReducer);
  });

  it('not disabled', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Auth />
        </Provider>
      </Router>,
    );

    userEvent.type(getByPlaceholderText('Email'), 'test');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Login')).not.toHaveAttribute('disabled');
  });

  it('disabled by empty email', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Auth />
        </Provider>
      </Router>,
    );

    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Login')).toHaveAttribute('disabled');
  });

  it('disabled by empty password', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Auth />
        </Provider>
      </Router>,
    );

    userEvent.type(getByPlaceholderText('Email'), 'test');
    expect(getByText('Login')).toHaveAttribute('disabled');
  });
});
