import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from '../scenes/Registration';
import Auth from '../scenes/Auth';
import Navigation from './Navigation';
import UserProfile from '../scenes/UserProfile';
import { useUserData } from './hooks';
import Products from '../scenes/Products';
import Notifications from '../scenes/Notifications';
import Orders from '../scenes/Orders';
import Delivery from '../scenes/Delivery';
import Requests from '../scenes/Requests';

function App() {
  useUserData();

  return (
    <Router>
      <div>
        <Navigation />
        <Notifications />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

          <Route path="/orders">
            <Orders />
          </Route>

          <Route path="/delivery">
            <Delivery />
          </Route>

          <Route path="/requests">
            <Requests />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
