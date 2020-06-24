export const SET_ORDERS = 'SET_ORDERS';
export function setOrders(orders) {
  return {
    type: SET_ORDERS,
    payload: orders,
  };
}
