import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import registrationReducer from './registration/reducers';
import userReducer from './user/reducers';
import productsReducer from './products/reducers';
import editNameReducer from './userProfile/editName/reducers';
import editEmailReducer from './userProfile/editEmail/reducers';
import editPhoneReducer from './userProfile/editPhone/reducers';
import editBalanceReducer from './userProfile/editBalance/reducers';
import cartReducer from './cart/reducers';
import notificationsReducer from './notifications/reducers';
import ordersReducer from './orders/reducers';
import { RESET } from './actions';

const appReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  user: userReducer,
  products: productsReducer,
  editName: editNameReducer,
  editEmail: editEmailReducer,
  editPhone: editPhoneReducer,
  editBalance: editBalanceReducer,
  cart: cartReducer,
  notifications: notificationsReducer,
  orders: ordersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
