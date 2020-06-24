import React from 'react';
import Title from '../../components/Title';
import Order from './Order';

function History({ orders }) {
  const orderList = orders.map((order) => (
    <Order
      key={order.id}
      image={order.product.image}
      name={order.product.name}
      price={order.product.price}
      status={order.status}
      clientName={order.client.name}
      phone={order.client.phone}
    />
  ));

  if (orders.length === 0) {
    return null;
  }

  return (
    <div>
      <div css={{ textAlign: 'center', margin: '30px' }}>
        <Title type="title">
          Delivery history
        </Title>
      </div>
      {orderList}
    </div>
  );
}

export default History;
