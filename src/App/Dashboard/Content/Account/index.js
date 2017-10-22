import './styles.css';
import React from 'react';
import T from 'prop-types';
import UserProfile from './UserProfileContainer.js';
import ChangePasswordForm from './ChangePasswordFormContainer.js';

const Account = () => (
  <div className="Account">    
  
    <UserProfile />
  
    <div></div>    
  
    <ChangePasswordForm />
  
  </div>
)

export default Account
