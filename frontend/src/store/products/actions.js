export const SET_PRODUCTS = 'SET_PRODUCTS';
export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export const PRODUCTS_SET_IS_FETCHING = 'PRODUCTS_SET_IS_FETCHING';
export function setIsFetching(isFetching) {
  return {
    type: PRODUCTS_SET_IS_FETCHING,
    payload: isFetching,
  };
}
