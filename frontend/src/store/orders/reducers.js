
import {
  SET_ORDERS,
} from './actions';

export function getInitialState() {
  return {
    orders: [],
    deliveryOrders: [],
    requestsOrders: [],
  };
}

function ordersReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [SET_ORDERS]: (state, action) => ({
      ...state,
      orders: action.payload.orders,
      deliveryOrders: action.payload.deliveryOrders,
      requestsOrders: action.payload.requestsOrders,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}

export default ordersReducer;
