import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import TextField from '../../components/TextField';
import Button from '../../components/Buttons/Button';
import Text from '../../components/Text';
import { authUser, fetchAllOrders } from '../../services/api';
import { setEmailText, setPasswordText, setHasWrongData } from '../../store/auth/actions';
import { setUser } from '../../store/user/actions';
import { getAuthData } from '../../store/selectors';
import { setOrders } from '../../store/orders/actions';

function Auth({
  email, password, hasWrongData, setEmailText, setPasswordText, setHasWrongData,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  function onEmailChange(event) {
    setEmailText(event.target.value);
  }

  function onPasswordChange(event) {
    setPasswordText(event.target.value);
  }

  function checkEmptyData() {
    return !email || !password;
  }

  async function login() {
    try {
      const user = await authUser({
        email,
        password,
      });
      if (user.id) {
        dispatch(setUser(user));
        const orders = await fetchAllOrders({ id: user.id });
        dispatch(setOrders(orders));
      }
      history.push('/products');
    } catch (error) {
      setHasWrongData(true);
    }
  }

  return (
    <AuthContainer>
      <TextField
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        color={hasWrongData ? 'danger' : null}
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        color={hasWrongData ? 'danger' : null}
      />
      <Text color="danger" size="7">
        {hasWrongData ? 'Wrong email or password' : ''}
      </Text>
      <Button onClick={login} color="primary" fullwidth disabled={checkEmptyData()}>
        Login
      </Button>
    </AuthContainer>
  );
}

const AuthContainer = styled('div')({
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10%',
});

const mapDispatchToProps = {
  setEmailText,
  setPasswordText,
  setHasWrongData,
};

export default connect(getAuthData, mapDispatchToProps)(Auth);
