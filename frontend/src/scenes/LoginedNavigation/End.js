import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarItem from '../../components/Navbar/NavbarItem';
import NavbarEnd from '../../components/Navbar/NavbarEnd';
import Text from '../../components/Text';
import { getUserName } from '../../store/selectors';
import Cart from '../Cart';

function End() {
  const history = useHistory();
  const userName = useSelector(getUserName);

  return (
    <NavbarEnd>
      <NavbarItem>
        <Text color="grey" size="5">
          <u>{userName}</u>
        </Text>
      </NavbarItem>
      <Cart />
      <NavbarItem onClick={() => history.push('/profile')}>
        <img src="/icons/id.png" alt="profile" />
      </NavbarItem>
    </NavbarEnd>
  );
}

export default End;
