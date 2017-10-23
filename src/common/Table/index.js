import './styles.css';
import React from 'react';

const Table = ({children}) => (
  <div className="table-responsive-vertical shadow-z-1">
    <table className="table table-hover">
      {children}
    </table>
  </div> 
);

export const Td = ({header, children}) => (
  <td data-title={header}>{children}</td>
)

export default Table;