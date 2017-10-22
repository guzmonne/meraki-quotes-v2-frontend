import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';

const UserProfile = ({user}) => (
  <Card className="UserProfile">
    <h2>Perfil</h2>

    <dt><b>Usuario:</b></dt>
    <dd>{user.username}</dd>

    <dt><b>Email:</b></dt>
    <dd>{user.email}</dd>

    <dt><b>Permisos:</b></dt>
    <dd>
    {user.permissions.length === 0
      ?
      'Sin permisos definidos.'
      :
      <ul>
      {user.permissions.map((permission) => (
        <li>{permission}</li>
      ))}
      </ul>
    }
    </dd>

  </Card>
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
