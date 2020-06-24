import React from 'react';
import { useHistory } from 'react-router-dom';
import NavbarItem from '../../components/Navbar/NavbarItem';
import NavbarEnd from '../../components/Navbar/NavbarEnd';
import ButtonsContainer from '../../components/Buttons/ButtonsContainer';
import Button from '../../components/Buttons/Button';

function End() {
  const history = useHistory();

  return (
    <NavbarEnd>
      <ButtonsContainer>
        <NavbarItem>
          <Button color="primary" onClick={() => history.push('/register')}>
            <strong>Sign up</strong>
          </Button>
          <Button color="light" onClick={() => history.push('/login')}>
            Log in
          </Button>
        </NavbarItem>
      </ButtonsContainer>
    </NavbarEnd>
  );
}

export default End;
