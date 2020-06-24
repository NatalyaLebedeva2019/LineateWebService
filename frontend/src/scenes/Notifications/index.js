import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { getNotificationsData } from '../../store/selectors';
import Notification from '../../components/Notification';
import { notificationRemove } from '../../store/notifications/actions';

function Notifications() {
  const notificationsData = useSelector(getNotificationsData);
  const dispatch = useDispatch();

  function remove(id) {
    dispatch(notificationRemove(id));
  }

  const notificationsList = notificationsData.map((notification) => {
    setTimeout(() => remove(notification.id), 5000);

    return (
      <Notification
        level={notification.level}
        onClose={() => remove(notification.id)}
        key={notification.id}
      >
        {notification.text}
      </Notification>
    );
  });

  return (
    <NotificationsContainer>
      {notificationsList}
    </NotificationsContainer>
  );
}

const NotificationsContainer = styled('div')({
  maxWidth: '300px',
  position: 'fixed',
  right: '25px',
  bottom: '25px',
  zIndex: '9999',
});

export default Notifications;
