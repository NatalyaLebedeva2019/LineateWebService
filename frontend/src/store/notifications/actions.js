export const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
export function notificationAdd(text, level) {
  return {
    type: NOTIFICATION_ADD,
    payload: {
      text,
      level,
    },
  };
}

export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE';
export function notificationRemove(id) {
  return {
    type: NOTIFICATION_REMOVE,
    payload: id,
  };
}
