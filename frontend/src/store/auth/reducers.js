import {
  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT,
  AUTH_SET_HAS_WRONG_DATA,
} from './actions';

export function getInitialState() {
  return {
    email: '',
    password: '',
    hasWrongData: false,
  };
}

function authReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [AUTH_CHANGE_EMAIL_TEXT]: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    [AUTH_CHANGE_PASSWORD_TEXT]: (state, action) => ({
      ...state,
      password: action.payload,
    }),
    [AUTH_SET_HAS_WRONG_DATA]: (state, action) => ({
      ...state,
      hasWrongData: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];

  return handler ? handler(previousState, recivedAction) : previousState;
}

export default authReducer;
