export const CHANGE_AMOUNT_TEXT = 'CHANGE_AMOUNT_TEXT';
export function setAmountText(amount) {
  return {
    type: CHANGE_AMOUNT_TEXT,
    payload: amount,
  };
}

export const CHANGE_BALANCE_FORM_IS_ACTIVE = 'CHANGE_BALANCE_FORM_IS_ACTIVE';
export function setIsActive(isActive) {
  return {
    type: CHANGE_BALANCE_FORM_IS_ACTIVE,
    payload: isActive,
  };
}
