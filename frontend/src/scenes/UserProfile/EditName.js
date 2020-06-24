import { connect, useDispatch } from 'react-redux';
import React from 'react';
import Text from '../../components/Text';
import TextField from '../../components/TextField';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal/Modal';
import ModalBackground from '../../components/Modal/ModalBackground';
import Notification from '../../components/Notification';
import { changeUserName } from '../../services/api';
import { setUser } from '../../store/user/actions';
import { setIsActive, setNewNameText } from '../../store/userProfile/editName/actions';
import { getEditNameData } from '../../store/selectors';
import { notificationAdd } from '../../store/notifications/actions';
import Icon from '../../components/Icon';
import Tile from '../../components/Tile';

function EditName({
  id, name, newName, isActive, setIsActive, setNewNameText, setUser,
}) {
  const dispatch = useDispatch();

  function openForm() {
    setNewNameText(name);
    setIsActive(true);
  }

  function closeForm() {
    setIsActive(false);
  }

  function onNewNameChange(event) {
    setNewNameText(event.target.value);
  }

  async function editName() {
    const result = await changeUserName({ id, name: newName });
    if (result.id) {
      setUser(result);
      closeForm();
    } else {
      dispatch(notificationAdd({
        text: 'Cannot change name',
        level: 'error',
      }));
    }
  }

  return (
    <Tile parent>
      <Text size="5" weight="bold">
        Name:
      </Text>
      <div css={{ 'margin-left': '20px' }}>
        <Text size="5">
          {name}
        </Text>
      </div>
      <Button color="white" onClick={openForm}>
        <Icon src="/icons/pencil.png" alt="editName" size="small" />
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground />
        <Notification level="white" onClose={closeForm}>
          <Text size="4">
            Change your name
          </Text>
          <TextField onChange={onNewNameChange} value={newName} />
          <Button color="primary" onClick={editName} disabled={!newName}>
            Change
          </Button>
        </Notification>
      </Modal>
    </Tile>
  );
}

const mapDispatchToProps = {
  setIsActive,
  setNewNameText,
  setUser,
};

export default connect(getEditNameData, mapDispatchToProps)(EditName);
