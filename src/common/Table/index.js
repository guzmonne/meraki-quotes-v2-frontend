import './styles.css';
import React from 'react';
import classnames from 'classnames';

const Table = ({hover, children}) => (
  <div className="table-responsive-vertical shadow-z-1">
    <table className={classnames('table', {
      'table-hover': hover === true
    })}>
      {children}
    </table>
  </div> 
);

export const Td = ({className, header, children}) => (
  <td data-title={header} className={className}>{children}</td>
)

export default Table;
