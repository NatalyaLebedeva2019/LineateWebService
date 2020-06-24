import React from 'react';
import styled from '@emotion/styled';
import Item from '../../components/Dropdown/Item';
import Column from '../../components/Columns/Column';
import Columns from '../../components/Columns/Columns';
import Button from '../../components/Buttons/Button';
import Text from '../../components/Text';

function CartItem({ product, removeProduct }) {
  return (
    <Item>
      <CartContainer>
        <Columns>
          <Column>
            <img src={product.image} alt={product.name} width="50px" />
          </Column>
          <Column size="half">
            <Text>{product.name}</Text>
          </Column>
          <Column>
            <Text color="primary">{product.price}</Text>
          </Column>
          <Column>
            <Button deleteButton onClick={removeProduct} />
          </Column>
        </Columns>
      </CartContainer>
    </Item>
  );
}

const CartContainer = styled('div')({
  maxWidth: '100%',
  width: 'auto',
  minWidth: '300px',
});

export default CartItem;
