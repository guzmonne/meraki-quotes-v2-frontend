import React from 'react';
import moment from 'moment';
import T from 'prop-types';

const DateFromNow = ({children}) => (
  <span>{moment(children).fromNow()}</span>
);

DateFromNow.propTypes = {
  children: T.oneOfType([T.string, T.number]),
};


export default DateFromNow;
