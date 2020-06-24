import {
  REGISTRATION_CHANGE_EMAIL_TEXT,
  REGISTRATION_CHANGE_IS_CLIENT,
  REGISTRATION_CHANGE_IS_COURIER,
  REGISTRATION_CHANGE_NAME_TEXT,
  REGISTRATION_CHANGE_PASSWORD_TEXT,
  REGISTRATION_CHANGE_PHONE_TEXT,
  REGISTRATION_SET_IS_VALID_PHONE,
  REGISTRATION_SET_IS_VALID_EMAIL,
} from './actions';

export function getInitialState() {
  return {
    isClient: false,
    isCourier: false,
    name: '',
    email: '',
    phone: '',
    password: '',
    isValidEmail: false,
    isValidPhone: false,
  };
}

function registrationReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [REGISTRATION_CHANGE_EMAIL_TEXT]: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    [REGISTRATION_CHANGE_IS_CLIENT]: (state, action) => ({
      ...state,
      isClient: action.payload,
    }),
    [REGISTRATION_CHANGE_IS_COURIER]: (state, action) => ({
      ...state,
      isCourier: action.payload,
    }),
    [REGISTRATION_CHANGE_NAME_TEXT]: (state, action) => ({
      ...state,
      name: action.payload,
    }),
    [REGISTRATION_CHANGE_PASSWORD_TEXT]: (state, action) => ({
      ...state,
      password: action.payload,
    }),
    [REGISTRATION_CHANGE_PHONE_TEXT]: (state, action) => ({
      ...state,
      phone: action.payload,
    }),
    [REGISTRATION_SET_IS_VALID_EMAIL]: (state, action) => ({
      ...state,
      isValidEmail: action.payload,
    }),
    [REGISTRATION_SET_IS_VALID_PHONE]: (state, action) => ({
      ...state,
      isValidPhone: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];

  return handler ? handler(previousState, recivedAction) : previousState;
}

export default registrationReducer;
