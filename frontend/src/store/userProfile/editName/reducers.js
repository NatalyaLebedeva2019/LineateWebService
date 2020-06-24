import {
  CHANGE_NEW_NAME_TEXT,
  CHANGE_NAME_FORM_IS_ACTIVE,
} from './actions';

export function getInitialState() {
  return {
    name: '',
    isActive: false,
  };
}

export default function editNameReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [CHANGE_NEW_NAME_TEXT]: (state, action) => ({
      ...state,
      name: action.payload,
    }),
    [CHANGE_NAME_FORM_IS_ACTIVE]: (state, action) => ({
      ...state,
      isActive: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
