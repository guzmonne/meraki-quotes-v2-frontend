import React from 'react';
import T from 'prop-types';
import Table, {Td} from '../../../../../../common/Table/';
import Label from '../../../../../../common/Label/';

const METHOD_TO_TYPE = {
  'GET': 'primary',
  'POST': 'success',
  'PUT': 'warning',
  'DELETE': 'danger'
};

const UsersPermissionsTable = ({permissions}) => (
  <Table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Metodo</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
    {permissions.map(p => (
      <tr>
        <Td header="Nombre">{p.permission}</Td>
        <Td header="Metodo">
          <Label type={METHOD_TO_TYPE[p.method]}>{p.method}</Label>
        </Td>
        <Td header="URL">{p.url}</Td>
      </tr>
    ))}
    </tbody>
  </Table>
);

UsersPermissionsTable.propTypes = {
  permissions: T.arrayOf(T.shape({
    method: T.string,
    permission: T.string,
    url: T.string,
  })).isRequired,
};

UsersPermissionsTable.defaultProps = {
  permissions: [],
}

export default UsersPermissionsTable;
