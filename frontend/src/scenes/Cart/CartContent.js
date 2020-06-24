import React from 'react';
import CartItem from './CartItem';
import Content from '../../components/Dropdown/Content';
import Button from '../../components/Buttons/Button';
import Text from '../../components/Text';

function CartContent({ products, removeProduct, makeOrder }) {
  const isEmpty = products.length === 0;

  const productsList = products.map((product) => (
    <CartItem
      key={product.ItemId}
      product={product}
      removeProduct={() => removeProduct(product.ItemId)}
    />
  ));

  if (!isEmpty) {
    return (
      <Content>
        {productsList}
        <Button color="primary" onClick={makeOrder} fullwidth>Make an order</Button>
      </Content>
    );
  }
  return (
    <Content>
      <Text size="4">Cart is empty</Text>
    </Content>
  );
}

export default CartContent;
