export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export function addProduct(product) {
  return {
    type: CART_ADD_PRODUCT,
    payload: product,
  };
}

export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export function removeProduct(id) {
  return {
    type: CART_REMOVE_PRODUCT,
    payload: id,
  };
}
