import React from 'react';
import styled from '@emotion/styled';
import Button from '../../components/Buttons/Button';
import Box from '../../components/Box';
import Text from '../../components/Text';

function ProductCard({ product, addToCart }) {
  return (
    <ProductContainer>
      <Box>
        <img src={product.image} alt={product.name} />
        <Text size="5" weight="semibold">
          {product.name}
        </Text>
        <Text>
          {product.content}
        </Text>
        <Text size="4" color="primary">
          {product.price}
        </Text>
        <Button color="primary" onClick={addToCart}>
            Add to cart
        </Button>
      </Box>
    </ProductContainer>
  );
}

const ProductContainer = styled('div')({
  display: 'inline-flex',
  margin: '10px',
  width: '256px',
});

export default ProductCard;
