import React from 'react';
import Title from '../../components/Title';
import Order from './Order';

function History({ orders }) {
  const orderList = orders.map((order) => (
    <Order
      key={order.id}
      order={order}
    />
  ));

  if (orders.length === 0) {
    return null;
  }

  return (
    <div>
      <div css={{ textAlign: 'center', margin: '30px' }}>
        <Title type="title">
          Order history
        </Title>
      </div>
      {orderList}
    </div>
  );
}

export default History;
