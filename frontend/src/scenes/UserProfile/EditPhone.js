import { connect, useDispatch } from 'react-redux';
import React from 'react';
import Text from '../../components/Text';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal/Modal';
import ModalBackground from '../../components/Modal/ModalBackground';
import Notification from '../../components/Notification';
import { changeUserPhone } from '../../services/api';
import { setUser } from '../../store/user/actions';
import { setIsActive, setNewPhoneText, setIsValid } from '../../store/userProfile/editPhone/actions';
import { getEditPhoneData } from '../../store/selectors';
import { notificationAdd } from '../../store/notifications/actions';
import Icon from '../../components/Icon';
import Tile from '../../components/Tile';
import PhoneInput from '../../components/PhoneInput';
import formatPhone from '../../services/phoneService';

function EditPhone({
  id, phone, newPhone, isActive, isValid, setIsActive, setNewPhoneText, setUser, setIsValid,
}) {
  const dispatch = useDispatch();

  function openForm() {
    setIsActive(true);
  }

  function closeForm() {
    setIsActive(false);
  }

  function onNewPhoneChange(value) {
    setNewPhoneText(value);
  }

  async function editPhone() {
    const result = await changeUserPhone({ id, phone: newPhone });
    if (result.id) {
      setUser(result);
      closeForm();
    } else {
      dispatch(notificationAdd({
        text: 'Cannot change email',
        level: 'error',
      }));
    }
  }

  return (
    <Tile parent>
      <Text size="5" weight="bold">
        Phone:
      </Text>
      <div css={{ 'margin-left': '20px' }}>
        <Text size="5">
          {formatPhone(phone)}
        </Text>
      </div>
      <Button onClick={openForm} color="white">
        <Icon src="/icons/pencil.png" alt="editPhone" size="small" />
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground />
        <Notification level="white" onClose={closeForm}>
          <Text size="4">
            Change your phone number
          </Text>
          <PhoneInput onChange={onNewPhoneChange} value={newPhone} setIsValid={setIsValid} />
          <Button color="primary" onClick={editPhone} disabled={!isValid}>
            Change
          </Button>
        </Notification>
      </Modal>
    </Tile>
  );
}

const mapDispatchToProps = {
  setIsActive,
  setNewPhoneText,
  setUser,
  setIsValid,
};

export default connect(getEditPhoneData, mapDispatchToProps)(EditPhone);
