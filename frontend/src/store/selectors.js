export function getAuthData(state) {
  return state.auth;
}

export function getRegistrationData(state) {
  return state.registration;
}

export function getUser(state) {
  return state.user;
}

export function getProductsData(state) {
  return {
    products: state.products.products,
    isFetching: state.products.isFetching,
  };
}

export function getProfileText(state) {
  return state.userProfile.text;
}

export function getUserName(state) {
  return state.user.name;
}

export function getEditNameData(state) {
  return {
    id: state.user.id,
    name: state.user.name,
    newName: state.editName.name,
    isActive: state.editName.isActive,
  };
}

export function getEditEmailData(state) {
  return {
    id: state.user.id,
    email: state.user.email,
    newEmail: state.editEmail.email,
    isActive: state.editEmail.isActive,
    isValid: state.editEmail.isValid,
  };
}

export function getEditBalanceData(state) {
  return {
    id: state.user.id,
    balance: state.user.balance,
    amount: state.editBalance.amount,
    isActive: state.editBalance.isActive,
  };
}

export function getEditPhoneData(state) {
  return {
    id: state.user.id,
    phone: state.user.phone,
    newPhone: state.editPhone.phone,
    isActive: state.editPhone.isActive,
    isValid: state.editPhone.isValid,
  };
}

export function getCartData(state) {
  return state.cart.products;
}

export function getNotificationsData(state) {
  return state.notifications.notifications;
}

export function getOrders(state) {
  return state.orders.orders;
}

export function getDeliveryData(state) {
  return state.orders.deliveryOrders;
}

export function getRequestsData(state) {
  return state.orders.requestsOrders;
}
