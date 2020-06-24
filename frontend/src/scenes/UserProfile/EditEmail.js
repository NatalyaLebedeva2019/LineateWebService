import { connect, useDispatch } from 'react-redux';
import React from 'react';
import Text from '../../components/Text';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal/Modal';
import ModalBackground from '../../components/Modal/ModalBackground';
import Notification from '../../components/Notification';
import { changeUserEmail } from '../../services/api';
import { setUser } from '../../store/user/actions';
import { setIsActive, setNewEmailText, setIsValid } from '../../store/userProfile/editEmail/actions';
import { getEditEmailData } from '../../store/selectors';
import { notificationAdd } from '../../store/notifications/actions';
import Icon from '../../components/Icon';
import Tile from '../../components/Tile';
import EmailInput from '../../components/EmailInput';

function EditEmail({
  id, email, newEmail, isActive, isValid, setIsActive, setNewEmailText, setUser, setIsValid,
}) {
  const dispatch = useDispatch();

  function openForm() {
    setIsActive(true);
  }

  function closeForm() {
    setIsActive(false);
  }

  function onNewEmailChange(value) {
    setNewEmailText(value);
  }

  async function editEmail() {
    const result = await changeUserEmail({ id, email: newEmail });
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
        Email:
      </Text>
      <div css={{ 'margin-left': '20px' }}>
        <Text size="5">
          {email}
        </Text>
      </div>
      <Button onClick={openForm} color="white">
        <Icon src="/icons/pencil.png" alt="editEmail" size="small" />
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground />
        <Notification level="white" onClose={closeForm}>
          <Text size="4">
            Change your email
          </Text>
          <EmailInput onChange={onNewEmailChange} value={newEmail} setIsValid={setIsValid} />
          <Button color="primary" onClick={editEmail} disabled={!isValid}>
            Change
          </Button>
        </Notification>
      </Modal>
    </Tile>
  );
}

const mapDispatchToProps = {
  setIsActive,
  setNewEmailText,
  setUser,
  setIsValid,
};

export default connect(getEditEmailData, mapDispatchToProps)(EditEmail);
