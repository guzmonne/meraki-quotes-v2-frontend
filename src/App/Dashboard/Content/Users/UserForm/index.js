import React from 'react';
import T from 'prop-types';
import {IUser} from '../IUsers.js';

const UserForm = ({user}) => (
  <form className={'UserFrom'}>
  
  </form>
);

UserForm.propTypes = {
  user: T.shape(IUser),
};


export default UserForm;
