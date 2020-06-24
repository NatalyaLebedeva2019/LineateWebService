import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditName from './EditName';
import EditEmail from './EditEmail';
import EditPhone from './EditPhone';
import EditBalance from './EditBalance';
import Button from '../../components/Buttons/Button';
import Text from '../../components/Text';
import { logout } from '../../services/api';
import { getUser } from '../../store/selectors';
import { setUser } from '../../store/user/actions';
import Title from '../../components/Title';
import Hero from '../../components/Hero';

function UserProfile() {
  const { id } = useSelector(getUser);
  const dispatch = useDispatch();
  const history = useHistory();

  async function signout() {
    await logout({ id });
    dispatch(setUser({}));
    history.push('/login');
  }

  if (!id) {
    return null;
  }

  return (
    <div>
      <Hero>
        <Title type="title">
          My profile
        </Title>
      </Hero>
      <EditName />
      <EditEmail />
      <EditPhone />
      <EditBalance />
      <Button color="white" onClick={signout}>
        <Text color="danger">
          Sign out
        </Text>
      </Button>
    </div>
  );
}

export default UserProfile;
