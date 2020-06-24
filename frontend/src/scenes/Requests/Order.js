import React from 'react';
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Columns/Column';
import Text from '../../components/Text';
import Button from '../../components/Buttons/Button';
import ButtonsContainer from '../../components/Buttons/ButtonsContainer';
import Box from '../../components/Box';
import Tile from '../../components/Tile';
import formatPhone from '../../services/phoneService';

function Order({
  image, name, price, clientName, phone, status, delivered, cancel,
}) {
  function ClientInfo() {
    if (clientName) {
      return (
        <Tile>
          <div css={{ marginRight: '10px' }}>
            <Text>Client:</Text>
          </div>
          <div css={{ marginRight: '10px' }}>
            <Text weight="bold">{clientName}</Text>
          </div>
          <Text weight="bold">{formatPhone(phone)}</Text>
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
        <Text weight="bold">{status}</Text>
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
            <ClientInfo />
            <StatusInfo />
            {status === 'delivering' ? (
              <ButtonsContainer>
                <Button color="primary" onClick={delivered}>
                  <strong>Delivered</strong>
                </Button>
                <Button color="white" onClick={cancel}>
                  <Text color="danger">Cancel</Text>
                </Button>
              </ButtonsContainer>
            ) : null}
          </Column>
        </Columns>
      </Box>
    </div>
  );
}

export default Order;
