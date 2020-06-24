export const CHANGE_NEW_EMAIL_TEXT = 'CHANGE_NEW_EMAIL_TEXT';
export function setNewEmailText(email) {
  return {
    type: CHANGE_NEW_EMAIL_TEXT,
    payload: email,
  };
}

export const CHANGE_EMAIL_FORM_IS_ACTIVE = 'CHANGE_EMAIL_FORM_IS_ACTIVE';
export function setIsActive(isActive) {
  return {
    type: CHANGE_EMAIL_FORM_IS_ACTIVE,
    payload: isActive,
  };
}

export const EDIT_EMAIL_SET_IS_VALID = 'EDIT_EMAIL_SET_IS_VALID';
export function setIsValid(isValid) {
  return {
    type: EDIT_EMAIL_SET_IS_VALID,
    payload: isValid,
  };
}
