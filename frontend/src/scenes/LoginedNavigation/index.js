import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Start from './Start';
import End from './End';

function LoginedNavigation() {
  return (
    <div>
      <Navbar>
        <Start />
        <End />
      </Navbar>
    </div>
  );
}

export default LoginedNavigation;
