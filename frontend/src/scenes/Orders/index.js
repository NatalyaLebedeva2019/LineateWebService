import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, getUser } from '../../store/selectors';
import { changeOrder, fetchAllOrders } from '../../services/api';
import NotClientBanner from '../../components/NotClientBanner';
import { notificationAdd } from '../../store/notifications/actions';
import CurrentOrders from './CurrentOrders';
import History from './History';
import { setOrders } from '../../store/orders/actions';

function Orders() {
  const orders = useSelector(getOrders);
  const currentOrders = orders.filter((order) => order.status !== 'canceled' && order.status !== 'done');
  const historyOrders = orders.filter((order) => order.status === 'canceled' || order.status === 'done');
  const { id, isCourier, isClient } = useSelector(getUser);
  const dispatch = useDispatch();

  async function done(order) {
    try {
      await changeOrder({ id: order.id, status: 'done' });
      dispatch(notificationAdd('Order done', 'success'));
      const fetchData = await fetchAllOrders({ id });
      dispatch(setOrders(fetchData));
    } catch (error) {
      dispatch(notificationAdd('Cannot done order!', 'error'));
    }
  }

  async function cancel(order) {
    try {
      await changeOrder({ id: order.id, status: 'canceled' });
      dispatch(notificationAdd('Order canceled!', 'success'));
      const fetchData = await fetchAllOrders({ id });
      dispatch(setOrders(fetchData));
    } catch (error) {
      dispatch(notificationAdd('Cannot cancel order!', 'error'));
    }
  }

  if (isClient) {
    return (
      <div>
        <CurrentOrders orders={currentOrders} done={done} cancel={cancel} />
        <History orders={historyOrders} />
      </div>
    );
  }

  if (!isClient && isCourier) {
    return (
      <NotClientBanner />
    );
  }

  return null;
}

export default Orders;
