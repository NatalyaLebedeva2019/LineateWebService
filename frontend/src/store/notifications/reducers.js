import uuid from 'uuid';

import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE,
} from './actions';

export function getInitialState() {
  return {
    notifications: [],
  };
}

export default function notificationsReducer(previousState = getInitialState(), recivedAction) {
  const actionHandlerMap = {
    [NOTIFICATION_ADD]: (state, action) => ({
      ...state,
      notifications: [...state.notifications, { ...action.payload, id: uuid() }],
    }),
    [NOTIFICATION_REMOVE]: (state, action) => ({
      ...state,
      notifications: state.notifications.filter(({ id: listId }) => listId !== action.payload),
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];
  return handler ? handler(previousState, recivedAction) : previousState;
}
