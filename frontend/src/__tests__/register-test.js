import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { toHaveAttribute } from '@testing-library/jest-dom';
import { createStore } from 'redux';
import Registration from '../scenes/Registration';
import rootReducer from '../store/reducer';

let store = createStore(rootReducer);

describe('Register form', () => {
  afterEach(() => {
    store = createStore(rootReducer);
  });

  it('not disabled', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Email'), 'test@test.com');
    userEvent.type(getByPlaceholderText('Phone number'), '7777777777');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).not.toHaveAttribute('disabled');

    userEvent.click(getByText('I am Client'));
    expect(getByText('Register')).not.toHaveAttribute('disabled');

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    expect(getByText('Register')).not.toHaveAttribute('disabled');
  });

  it('disabled by empty status', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Email'), 'test@test.com');
    userEvent.type(getByPlaceholderText('Phone number'), '7777777777');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });

  it('disabled by empty name', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Email'), 'test@test.com');
    userEvent.type(getByPlaceholderText('Phone number'), '7777777777');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });

  it('disabled by empty email', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Phone number'), '7777777777');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });

  it('disabled by invalid email', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Email'), 'test');
    userEvent.type(getByPlaceholderText('Phone number'), '7777777777');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });

  it('disabled by empty phone', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Email'), 'test');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });

  it('disabled by invalid phone', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Email'), 'test');
    userEvent.type(getByPlaceholderText('Phone number'), '777');
    userEvent.type(getByPlaceholderText('Password'), 'test');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });

  it('disabled by empty password', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Provider store={store}>
          <Registration />
        </Provider>
      </Router>,
    );

    userEvent.click(getByText('I am Client'));
    userEvent.click(getByText('I am Courier'));
    userEvent.type(getByPlaceholderText('Name'), 'test');
    userEvent.type(getByPlaceholderText('Email'), 'test');
    userEvent.type(getByPlaceholderText('Phone number'), '777');
    expect(getByText('Register')).toHaveAttribute('disabled');
  });
});
