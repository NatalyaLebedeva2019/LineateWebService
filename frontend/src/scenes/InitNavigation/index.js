import React from 'react';
import { Redirect } from 'react-router-dom';
import End from './End';
import Navbar from '../../components/Navbar/Navbar';

function InitNavigation() {
  return (
    <div>
      <Navbar>
        <End />
      </Navbar>
    </div>
  );
}

export default InitNavigation;
