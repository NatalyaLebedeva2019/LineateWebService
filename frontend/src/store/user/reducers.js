import {
  ADD_USER,
} from './actions';

export function getInitialState() {
  return {
    id: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    balance: '',
    isClient: false,
    isCourier: false,
  };
}

export default function userReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [ADD_USER]: (state, action) => ({
      ...state,
      id: action.payload.id,
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      balance: action.payload.balance,
      isClient: action.payload.isClient,
      isCourier: action.payload.isCourier,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
