import React from 'react';
import { useHistory } from 'react-router-dom';
import NavbarItem from '../../components/Navbar/NavbarItem';
import NavbarStart from '../../components/Navbar/NavbarStart';

function Start() {
  const history = useHistory();

  return (
    <NavbarStart>
      <NavbarItem onClick={() => history.push('/products')}>
        Products
      </NavbarItem>
      <NavbarItem onClick={() => history.push('/delivery')}>
        Delivery
      </NavbarItem>
      <NavbarItem onClick={() => history.push('/orders')}>
        Orders
      </NavbarItem>
      <NavbarItem onClick={() => history.push('/requests')}>
        Requests
      </NavbarItem>
    </NavbarStart>
  );
}

export default Start;
