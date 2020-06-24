import React from 'react';
import { useSelector } from 'react-redux';
import LoginedNavigation from '../scenes/LoginedNavigation';
import InitNavigation from '../scenes/InitNavigation';
import { getUser } from '../store/selectors';

export default function Navigation() {
  const { id } = useSelector(getUser);
  if (id) return (<LoginedNavigation />);
  return (<InitNavigation />);
}
