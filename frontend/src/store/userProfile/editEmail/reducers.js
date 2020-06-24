import {
  CHANGE_NEW_EMAIL_TEXT,
  CHANGE_EMAIL_FORM_IS_ACTIVE,
  EDIT_EMAIL_SET_IS_VALID,
} from './actions';

export function getInitialState() {
  return {
    email: '',
    isActive: false,
    isValid: false,
  };
}

export default function editEmailReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [CHANGE_NEW_EMAIL_TEXT]: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    [CHANGE_EMAIL_FORM_IS_ACTIVE]: (state, action) => ({
      ...state,
      isActive: action.payload,
    }),
    [EDIT_EMAIL_SET_IS_VALID]: (state, action) => ({
      ...state,
      isValid: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
