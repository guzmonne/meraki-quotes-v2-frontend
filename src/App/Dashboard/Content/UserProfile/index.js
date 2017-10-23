import React from 'react';
import T from 'prop-types';

const UserProfile = ({user}) => (
  <div className="UserProfile">
    <h2>Perfil</h2>
    
    <dt><b>Usuario:</b></dt>
    <dd>{user.username}</dd>

    <dt><b>Email:</b></dt>
    <dd>{user.email}</dd>

    <dt><b>Permisos:</b></dt>
    <dd>
    {user.permissions && user.permissions.length > 0
      ?
      <ul className="list-unstyled">
      {user.permissions.map((permission) => (
        <li>{permission}</li>
      ))}
      </ul>
      :
      'Sin permisos definidos.'
    }
    </dd>
  </div>
);

UserProfile.propTypes = {
  user: T.shape({
    email: T.string,
    username: T.string,
    permissions: T.arrayOf(T.string),
  }),
};

UserProfile.defaultProps = {
  user: {permissions: []},
};

export default UserProfile;
