import { connect, useDispatch } from 'react-redux';
import React from 'react';

import Text from '../../components/Text';
import TextField from '../../components/TextField';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal/Modal';
import ModalBackground from '../../components/Modal/ModalBackground';
import Notification from '../../components/Notification';
import Icon from '../../components/Icon';
import Tile from '../../components/Tile';

import { changeUserBalance } from '../../services/api';
import { setUser } from '../../store/user/actions';
import { setIsActive, setAmountText } from '../../store/userProfile/editBalance/actions';
import { getEditBalanceData } from '../../store/selectors';
import { notificationAdd } from '../../store/notifications/actions';

function EditBalance({
  id, amount, balance, isActive, setIsActive, setAmountText, setUser,
}) {
  const dispatch = useDispatch();

  function openForm() {
    setIsActive(true);
  }

  function closeForm() {
    setIsActive(false);
  }

  function onAmountChange(event) {
    setAmountText(event.target.value);
  }

  async function fillUp() {
    if (!Number(amount)) {
      dispatch(notificationAdd({
        text: 'Cannot fill up your balance',
        level: 'error',
      }));
    }
    const newBalance = Number(balance) + Number(amount);
    const result = await changeUserBalance({ id, balance: newBalance });
    if (result.id) {
      setUser(result);
      closeForm();
    }
  }

  return (
    <Tile parent>
      <Text size="5" weight="bold">
        Balance:
      </Text>
      <div css={{ 'margin-left': '20px' }}>
        <Text size="5">
          {balance}
        </Text>
      </div>
      <Button onClick={openForm} color="white">
        <Text color="grey" weight="bold">
          <u>Fill up</u>
        </Text>
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground />
        <Notification level="white" onClose={closeForm}>
          <Text size="4">
            Fill up your balance
          </Text>
          <TextField onChange={onAmountChange} value={amount} placeholder="Amount" />
          <Button color="primary" onClick={fillUp} disabled={!amount}>
            Change
          </Button>
        </Notification>
      </Modal>
    </Tile>
  );
}

const mapDispatchToProps = {
  setIsActive,
  setAmountText,
  setUser,
};

export default connect(getEditBalanceData, mapDispatchToProps)(EditBalance);
