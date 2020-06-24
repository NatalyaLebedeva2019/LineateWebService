
import {
  SET_PRODUCTS,
  PRODUCTS_SET_IS_FETCHING,
} from './actions';

export function getInitialState() {
  return {
    products: [],
    isFetching: true,
  };
}

function productsReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [SET_PRODUCTS]: (state, action) => ({
      ...state,
      products: action.payload,
    }),
    [PRODUCTS_SET_IS_FETCHING]: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}

export default productsReducer;
