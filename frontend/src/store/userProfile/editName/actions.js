export const CHANGE_NEW_NAME_TEXT = 'CHANGE_NEW_NAME_TEXT';
export function setNewNameText(name) {
  return {
    type: CHANGE_NEW_NAME_TEXT,
    payload: name,
  };
}

export const CHANGE_NAME_FORM_IS_ACTIVE = 'CHANGE_NAME_FORM_IS_ACTIVE';
export function setIsActive(isActive) {
  return {
    type: CHANGE_NAME_FORM_IS_ACTIVE,
    payload: isActive,
  };
}
