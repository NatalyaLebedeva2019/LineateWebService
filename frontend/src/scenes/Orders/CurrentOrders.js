import React from 'react';
import Title from '../../components/Title';
import Order from './Order';

function CurrentOrders({ orders, done, cancel }) {
  const orderList = orders.map((order) => (
    <Order
      key={order.id}
      order={order}
      done={() => done(order)}
      cancel={() => cancel(order)}
    />
  ));

  if (orders.length === 0) {
    return null;
  }

  return (
    <div>
      <div css={{ textAlign: 'center', margin: '30px' }}>
        <Title type="title">
          Current orders
        </Title>
      </div>
      {orderList}
    </div>
  );
}

export default CurrentOrders;
