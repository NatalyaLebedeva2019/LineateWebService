export const CHANGE_NEW_PHONE_TEXT = 'CHANGE_NEW_PHONE_TEXT';
export function setNewPhoneText(phone) {
  return {
    type: CHANGE_NEW_PHONE_TEXT,
    payload: phone,
  };
}

export const CHANGE_PHONE_FORM_IS_ACTIVE = 'CHANGE_PHONE_FORM_IS_ACTIVE';
export function setIsActive(isActive) {
  return {
    type: CHANGE_PHONE_FORM_IS_ACTIVE,
    payload: isActive,
  };
}

export const EDIT_PHONE_SET_IS_ACTIVE = 'EDIT_PHONE_SET_IS_ACTIVE';
export function setIsValid(isValid) {
  return {
    type: EDIT_PHONE_SET_IS_ACTIVE,
    payload: isValid,
  };
}
