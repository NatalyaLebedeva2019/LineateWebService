import uuid from 'uuid';

import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
} from './actions';

export function getInitialState() {
  return {
    products: [],
  };
}

export default function cartReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [CART_ADD_PRODUCT]: (state, action) => ({
      ...state,
      products: [...state.products, { ...action.payload, ItemId: uuid() }],
    }),
    [CART_REMOVE_PRODUCT]: (state, action) => ({
      ...state,
      products: state.products.filter(({ ItemId: listId }) => listId !== action.payload),
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
