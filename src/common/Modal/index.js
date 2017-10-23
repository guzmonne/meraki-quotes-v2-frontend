import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import TimesSvg from '../Icons/TimesSvg.js';
import Action from '../Action/';

const TYPES = ['danger'];

const Modal = ({closeModal, type, title, children}) => (
  <div className="modal-wrapper">
    <div className={classnames('modal', {
      [`modal-${type}`]: TYPES.indexOf(type) > -1,
    })}>
    {closeModal &&
      <Action className="modal-close" onClick={closeModal}>
        <TimesSvg fill="white" />
      </Action>
    }
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: T.node,
  closeModal: T.func,
};

export default Modal;
