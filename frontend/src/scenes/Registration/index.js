import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import TextField from '../../components/TextField';
import Button from '../../components/Buttons/Button';
import CheckBox from '../../components/CheckBox';
import { register, fetchAllOrders } from '../../services/api';
import Text from '../../components/Text';
import {
  setIsClient,
  setIsCourier,
  setEmailText,
  setPhoneText,
  setPasswordText,
  setNameText,
  setIsValidEmail,
  setIsValidPhone,
} from '../../store/registration/actions';
import { getRegistrationData } from '../../store/selectors';
import { setUser } from '../../store/user/actions';
import PhoneInput from '../../components/PhoneInput';
import { notificationAdd } from '../../store/notifications/actions';
import EmailInput from '../../components/EmailInput';
import { setOrders } from '../../store/orders/actions';

function Registration({
  name, email, phone, password, isCourier, isClient, isValidEmail, isValidPhone,
  setNameText, setEmailText, setPhoneText, setPasswordText, setIsClient,
  setIsCourier, setIsValidEmail, setIsValidPhone,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  function onIsClientChange() {
    setIsClient(!isClient);
  }

  function onIsCourierChange() {
    setIsCourier(!isCourier);
  }

  function onNameChange(event) {
    setNameText(event.target.value);
  }

  function onEmailChange(value) {
    setEmailText(value);
  }

  function onPhoneChange(value) {
    setPhoneText(value);
  }

  function onPasswordChange(event) {
    setPasswordText(event.target.value);
  }

  function checkIsValid() {
    return !name || !isValidEmail || !isValidPhone || !password || (!isClient && !isCourier);
  }

  async function registerUser() {
    try {
      const user = await register({
        name,
        email,
        phone,
        password,
        isCourier,
        isClient,
      });
      if (user.id) {
        dispatch(setUser(user));
        const orders = await fetchAllOrders({ id: user.id });
        dispatch(setOrders(orders));
      }
      history.push('/products');
    } catch (error) {
      dispatch(notificationAdd('Error! Connot register user', 'error'));
    }
  }

  return (
    <RegistrationContainer>
      <Text>Who are you?</Text>
      <CheckBox id="isClient" isSelected={isClient} onChange={onIsClientChange}>
        I am Client
      </CheckBox>
      <CheckBox id="isCourier" isSelected={isCourier} onChange={onIsCourierChange}>
        I am Courier
      </CheckBox>
      <TextField type="text" placeholder="Name" value={name} onChange={onNameChange} />
      <EmailInput value={email} onChange={onEmailChange} setIsValid={setIsValidEmail} />
      <PhoneInput value={phone} onChange={onPhoneChange} setIsValid={setIsValidPhone} />
      <TextField type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <Button onClick={registerUser} color="primary" fullwidth disabled={checkIsValid()}>
        Register
      </Button>
    </RegistrationContainer>
  );
}

const RegistrationContainer = styled('div')({
  width: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
});

const mapDispatchToProps = {
  setIsClient,
  setIsCourier,
  setEmailText,
  setPasswordText,
  setPhoneText,
  setNameText,
  setIsValidEmail,
  setIsValidPhone,
};

export default connect(getRegistrationData, mapDispatchToProps)(Registration);
