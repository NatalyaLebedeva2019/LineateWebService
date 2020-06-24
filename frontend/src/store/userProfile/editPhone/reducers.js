import {
  CHANGE_NEW_PHONE_TEXT,
  CHANGE_PHONE_FORM_IS_ACTIVE,
  EDIT_PHONE_SET_IS_ACTIVE,
} from './actions';

export function getInitialState() {
  return {
    phone: '',
    isActive: false,
    isValid: false,
  };
}

export default function editPhoneReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [CHANGE_NEW_PHONE_TEXT]: (state, action) => ({
      ...state,
      phone: action.payload,
    }),
    [CHANGE_PHONE_FORM_IS_ACTIVE]: (state, action) => ({
      ...state,
      isActive: action.payload,
    }),
    [EDIT_PHONE_SET_IS_ACTIVE]: (state, action) => ({
      ...state,
      isValid: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
