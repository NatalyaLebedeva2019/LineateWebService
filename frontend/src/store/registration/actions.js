export const REGISTRATION_CHANGE_NAME_TEXT = 'REGISTRATION_CHANGE_NAME_TEXT';
export function setNameText(name) {
  return {
    type: REGISTRATION_CHANGE_NAME_TEXT,
    payload: name,
  };
}

export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';
export function setEmailText(email) {
  return {
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email,
  };
}

export const REGISTRATION_CHANGE_PHONE_TEXT = 'REGISTRATION_CHANGE_PHONE_TEXT';
export function setPhoneText(phone) {
  return {
    type: REGISTRATION_CHANGE_PHONE_TEXT,
    payload: phone,
  };
}

export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT';
export function setPasswordText(password) {
  return {
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password,
  };
}

export const REGISTRATION_CHANGE_IS_CLIENT = 'REGISTRATION_CHANGE_IS_CLIENT';
export function setIsClient(isClient) {
  return {
    type: REGISTRATION_CHANGE_IS_CLIENT,
    payload: isClient,
  };
}

export const REGISTRATION_CHANGE_IS_COURIER = 'REGISTRATION_CHANGE_IS_COURIER';
export function setIsCourier(isCourier) {
  return {
    type: REGISTRATION_CHANGE_IS_COURIER,
    payload: isCourier,
  };
}

export const REGISTRATION_SET_IS_VALID_EMAIL = 'REGISTRATION_SET_IS_VALID_EMAIL';
export function setIsValidEmail(isValid) {
  return {
    type: REGISTRATION_SET_IS_VALID_EMAIL,
    payload: isValid,
  };
}

export const REGISTRATION_SET_IS_VALID_PHONE = 'REGISTRATION_SET_IS_VALID_PHONE';
export function setIsValidPhone(isValid) {
  return {
    type: REGISTRATION_SET_IS_VALID_PHONE,
    payload: isValid,
  };
}
