import './styles.css';
import React from 'react';
import UserProfile from './UserProfileContainer.js';
import ChangePasswordForm from './ChangePasswordFormContainer.js';
import Card from '../Card/';

const Account = () => (
  <div className="Account">    
  
    <Card><UserProfile /></Card>
  
    <div></div>    
  
    <ChangePasswordForm />
  
  </div>
)

export default Account
