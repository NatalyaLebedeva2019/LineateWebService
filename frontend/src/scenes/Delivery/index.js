import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeliveryData, getUser } from '../../store/selectors';
import Order from './Order';
import { changeOrder, fetchAllOrders } from '../../services/api';
import NotCourierBanner from '../../components/NotCourierBanner';
import { notificationAdd } from '../../store/notifications/actions';
import { setOrders } from '../../store/orders/actions';

function Delivery() {
  const deliveryOrders = useSelector(getDeliveryData);
  const { isCourier, id, isClient } = useSelector(getUser);
  const dispatch = useDispatch();

  async function deliver(order) {
    try {
      await changeOrder({ courier_id: id, id: order.id });
      dispatch(notificationAdd('Order taken in delivery', 'success'));
      const orders = await fetchAllOrders({ id });
      dispatch(setOrders(orders));
    } catch (error) {
      dispatch(notificationAdd('Cannot take order in delivery', 'error'));
    }
  }

  const orderList = deliveryOrders.map((order) => (
    <Order
      key={order.id}
      image={order.product.image}
      name={order.product.name}
      price={order.product.price}
      clientName={order.client.name}
      phone={order.client.phone}
      deliver={() => deliver(order)}
    />
  ));

  if (isClient && !isCourier) {
    return (
      <NotCourierBanner />
    );
  }

  if (isCourier) {
    return (
      <div>
        {orderList}
      </div>
    );
  }

  return null;
}

export default Delivery;
