import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../../common/Modal/';
import UserPermissionForm from './UserPermissionForm/';

const defaultForm = () => ({
  permission: '',
  method: '',
  url: '',
})

class UserPermissionCreateModal extends React.Component {
  componentWillMount() {
    this.props.resetForm(defaultForm());
  }

  render() {
    const {
      createPermission,
      permission,
      creating,
      error,
      closeModal
    } = this.props;

    return (
      <Modal title="Nuevo Permiso"
        type="success"
        closeModal={closeModal}>
        <div className="UserShowModal">
          <UserPermissionForm permission={permission}
            onSubmit={(body) => createPermission(body, defaultForm())}
            error={error}
            submitting={creating}
          />
        </div>
      </Modal>
    );
  }
}

UserPermissionCreateModal.propTypes = {
  closeModal: T.func.isRequired,
  createPermission: T.func.isRequired,
  error: T.object,
  permission: T.shape({
    permission: T.string,
    method: T.string,
    url: T.string,
  })
};

UserPermissionCreateModal.defaultProps = {
  closeModal: () => {},
  resetForm: () => {},
}

export default UserPermissionCreateModal;
