import {
  CHANGE_AMOUNT_TEXT,
  CHANGE_BALANCE_FORM_IS_ACTIVE,
} from './actions';

export function getInitialState() {
  return {
    amount: '',
    isActive: false,
  };
}

export default function editBalanceReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [CHANGE_AMOUNT_TEXT]: (state, action) => ({
      ...state,
      amount: action.payload,
    }),
    [CHANGE_BALANCE_FORM_IS_ACTIVE]: (state, action) => ({
      ...state,
      isActive: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
