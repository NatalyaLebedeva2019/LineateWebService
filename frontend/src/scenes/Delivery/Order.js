import React from 'react';
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Columns/Column';
import Text from '../../components/Text';
import Button from '../../components/Buttons/Button';
import Box from '../../components/Box';
import Tile from '../../components/Tile';
import formatPhone from '../../services/phoneService';

function Order({
  image, name, price, clientName, phone, deliver,
}) {
  return (
    <div css={{ margin: 'auto', maxWidth: '600px', marginBottom: '20px' }}>
      <Box>
        <Columns>
          <Column size="3">
            <img src={image} alt={name} width="100px" />
          </Column>
          <Column>
            <Text>{name}</Text>
            <Text color="primary" size="3">{price}</Text>
            <Tile>
              <div css={{ marginRight: '10px' }}>
                <Text>Courier:</Text>
              </div>
              <div css={{ marginRight: '10px' }}>
                <Text weight="bold">{clientName}</Text>
              </div>
              <Text weight="bold">{formatPhone(phone)}</Text>
            </Tile>
            <Button color="primary" onClick={deliver}>
              <strong>Deliver</strong>
            </Button>
          </Column>
        </Columns>
      </Box>
    </div>
  );
}

export default Order;
