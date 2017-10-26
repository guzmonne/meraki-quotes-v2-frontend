import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import Form from '../../../../../../../common/Form/';
import ControlInput from '../../../../../../../common/ControlInput/';
import Button from '../../../../../../../common/Button/';

const UserPermissionForm = ({permission, error, submitting, onSubmit}) => (
  <Form data={permission}>{({
    data,
    handleOnChange,
    handleOnSubmit
  }) => (

    <form className="UserPermissionForm" onSubmit={handleOnSubmit(onSubmit)}>
      <ControlInput
        value={data.permission}
        label="Nombre"
        type="text"
        error={get(error, 'details.0.path.0') === 'permission'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('permission')}
      />

      <ControlInput
        value={data.method}
        label="Metodo"
        type="text"
        error={get(error, 'details.0.path.0') === 'method'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('method')}
      />

      <ControlInput
        value={data.url}
        label="URL"
        type="text"
        error={get(error, 'details.0.path.0') === 'url'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('url')}
      />

      <Button type="submit" loading={submitting} color="green">
        Crear permiso
      </Button>

    </form>
  )}</Form>
);

UserPermissionForm.propTypes = {
  permission: T.shape({
    permission: T.string,
    method: T.string,
    url: T.string,
  }),
  error: T.object,
  submitting: T.bool,
  onSubmit: T.func,
};

export default UserPermissionForm;
