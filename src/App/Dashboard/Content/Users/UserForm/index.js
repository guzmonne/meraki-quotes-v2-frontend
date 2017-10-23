import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import {IUser} from '../IUsers.js';
import Form from '../../../../../common/Form/';
import ControlInput from '../../../../../common/ControlInput/';
import Button from '../../../../../common/Button/';

const UserForm = ({user, loading, error, onSubmit}) => (
  <Form data={user}>{({
    data,
    handleOnChange,
    handleOnSubmit
  }) => (
    <form className="UserForm" onSubmit={handleOnSubmit(onSubmit)}>
      <ControlInput
        value={data.username}
        label="Nombre de usuario"
        type="text"
        error={get(error, 'details.0.path.0') === 'username'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('username')}
      />
      <ControlInput
        value={data.email}
        label="Email"
        type="text"
        error={get(error, 'details.0.path.0') === 'email'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('email')}
      />
      <ControlInput
        value={data.password}
        label="Contraseña"
        type="password"
        error={get(error, 'details.0.path.0') === 'password'}
        errorMessage={get(error, 'details.0.message')}
        onChange={handleOnChange('password')}
      />
      <Button type="submit" loading={loading}>
        Aceptar
      </Button>
    </form>
  )}</Form>
);

UserForm.propTypes = {
  user: T.shape(IUser),
};


export default UserForm;
