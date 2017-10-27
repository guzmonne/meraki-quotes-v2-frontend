import React from 'react';
import T from 'prop-types';
import isFunction from 'lodash/isFunction';
import Table from '../../../../common/Table/';

const createTableComponent = ({
  headers,
  rowId,
  schema,
  displayName = 'TableComponent',
}) => Component => {
  const TableComponent = ({
    items,
    displayDestroyModal,
    displayShowModal,
    displayUpdateModal
  }) => (
    <Table>
      <thead>
      <tr>
      {headers.map(header => (
        <th key={header}>{header}</th>
      ))}
      </tr>
      </thead>
      <tbody>
      {items.map((item, i) => 
        <Component key={isFunction(rowId) ? rowId(item) : item[rowId]} 
          displayShowModal={displayShowModal.bind(null, item)} 
          displayUpdateModal={displayUpdateModal.bind(null, item)} 
          displayDestroyModal={displayDestroyModal.bind(null, item)} 
          {...item} 
        />
      )}
      </tbody>
    </Table> 
  )

  TableComponent.displayName = displayName;

  TableComponent.propTypes = {
    items: T.arrayOf(T.shape(schema)),
    displayDestroyModal: T.func,
    displayShowModal: T.func,
    displayUpdateModal: T.func,
  };

  TableComponent.defaultProps = {
    items: [],
  };

  return TableComponent;
};

export default createTableComponent;
