export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export function setEmailText(email) {
  return {
    type: AUTH_CHANGE_EMAIL_TEXT,
    payload: email,
  };
}

export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';
export function setPasswordText(password) {
  return {
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password,
  };
}

export const AUTH_SET_HAS_WRONG_DATA = 'AUTH_SET_HAS_WRONG_DATA';
export function setHasWrongData(hasWrongData) {
  return {
    type: AUTH_SET_HAS_WRONG_DATA,
    payload: hasWrongData,
  };
}
