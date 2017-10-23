import './styles.css';
import React from 'react';
import T from 'prop-types';
import Button from '../Button/';

const Pagination = ({disabledPrev, disabledNext, onNext, onPrev}) => (
  <div className="Pagination">
    <Button type="button" disabled={disabledPrev} onClick={onPrev}>
      &larr;
    </Button>
    <Button type="button" disabled={disabledNext} onClick={onNext}>
      &rarr;
    </Button>
  </div>
);

Pagination.propTypes = {
  disabledPrev: T.bool,
  disabledNext: T.bool,
  onPrev: T.func,
  onNext: T.func,
};

Pagination.defaultProps = {
  onPrev: () => {},
  onNext: () => {},
};

export default Pagination;
