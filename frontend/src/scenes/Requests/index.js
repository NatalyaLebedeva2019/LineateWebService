import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getRequestsData } from '../../store/selectors';
import NotCourierBanner from '../../components/NotCourierBanner';
import { changeOrder, fetchAllOrders } from '../../services/api';
import { notificationAdd } from '../../store/notifications/actions';
import History from './History';
import CurrentDelivery from './CurrentDelivery';
import { setOrders } from '../../store/orders/actions';

function Requests() {
  const dispatch = useDispatch();
  const { id, isCourier, isClient } = useSelector(getUser);
  const requestsOrders = useSelector(getRequestsData);
  const currentOrders = requestsOrders.filter((order) => order.status === 'delivering' || order.status === 'delivered');
  const historyOrders = requestsOrders.filter((order) => order.status !== 'delivering' && order.status !== 'delivered');

  async function delivered(order) {
    try {
      await changeOrder({ id: order.id, status: 'delivered' });
      dispatch(notificationAdd('Change status with delivered', 'success'));
      const fetchData = await fetchAllOrders({ id });
      dispatch(setOrders(fetchData));
    } catch (error) {
      dispatch(notificationAdd('Cannot change status', 'error'));
    }
  }

  async function cancel(order) {
    try {
      await changeOrder({ id: order.id, status: 'canceled' });
      dispatch(notificationAdd('Order canceled!', 'success'));
      const fetchData = await fetchAllOrders({ id });
      dispatch(setOrders(fetchData));
    } catch (error) {
      dispatch(notificationAdd('Cannot cancel order', 'error'));
    }
  }

  if (isClient && !isCourier) {
    return (
      <NotCourierBanner />
    );
  }

  if (isCourier) {
    return (
      <div>
        <CurrentDelivery orders={currentOrders} delivered={delivered} cancel={cancel} />
        <History orders={historyOrders} />
      </div>
    );
  }

  return null;
}

export default Requests;
