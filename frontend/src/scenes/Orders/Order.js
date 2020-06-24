import React from 'react';
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Columns/Column';
import Text from '../../components/Text';
import Button from '../../components/Buttons/Button';
import Box from '../../components/Box';
import Tile from '../../components/Tile';
import formatPhone from '../../services/phoneService';

function Order({
  order, done, cancel,
}) {
  const { status, courier } = order;
  const { name, image, price } = order.product;

  function CourierInfo() {
    if (courier) {
      return (
        <Tile>
          <div css={{ marginRight: '10px' }}>
            <Text>Courier:</Text>
          </div>
          <div css={{ marginRight: '10px' }}>
            <Text weight="bold">{courier.name}</Text>
          </div>
          <Text weight="bold">{formatPhone(courier.phone)}</Text>
        </Tile>
      );
    }
    return null;
  }

  function StatusInfo() {
    return (
      <Tile>
        <div css={{ marginRight: '10px' }}>
          <Text>Status:</Text>
        </div>
        <Text weight="bold">{order.status}</Text>
      </Tile>
    );
  }

  return (
    <div css={{ margin: 'auto', maxWidth: '600px', marginBottom: '20px' }}>
      <Box>
        <Columns>
          <Column size="3">
            <img src={image} alt={name} width="100px" />
          </Column>
          <Column>
            <Text>{name}</Text>
            <Text color="primary">{price}</Text>
            <CourierInfo />
            <StatusInfo />
            {status === 'delivered' ? (
              <Button color="primary" onClick={done}>
                <strong>Done</strong>
              </Button>
            ) : null}
            {status !== 'done' && status !== 'canceled' ? (
              <Button color="white" onClick={cancel}>
                <Text color="danger">Cancel</Text>
              </Button>
            ) : null}
          </Column>
        </Columns>
      </Box>
    </div>
  );
}

export default Order;
