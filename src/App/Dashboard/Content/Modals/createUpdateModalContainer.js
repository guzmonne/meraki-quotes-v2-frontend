import React from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';
import UpdateModal from './UpdateModal/';
import {
  API_UPDATE,
  DISPATCH_MULTIPLE_ACTIONS,
} from '../../../../store/actions.js';
import {closeModalConstructor} from './helpers.js';

const mapStateToPropsConstructor = ({
  uiKeyName,
  modelName,
  target,
}) => (state) => {
  const key = get(state, `ui.${target}.${uiKeyName}`);
  return {
    [modelName]: get(state, `entities.${target}.${key}`)
  }
};

const mapActionsToPropsConstructor = ({
  modalFlagName,
  updateUiPayload,
  target
}) => {
  const closeModal = closeModalConstructor({
    modalFlagName,
    updateUiPayload,
    target,
  });

  return {
    closeModal,
    onUpdate: (key, body) => ({
      type: DISPATCH_MULTIPLE_ACTIONS,
      payload: [
        closeModal(), {
        type: API_UPDATE,
        payload: {
          endpoint: `/${target}/${key}`,
          body,
          key,
          target
        }
      }]
    })
  }
};

const createUpdateModalContainer = ({
  uiKeyName,
  modelName,
  modalFlagName,
  updateUiPayload,
  target,
  title,
  displayName = 'UpdateModalContainer',
}) => (Component) => {
  const Container = (props) => (<UpdateModal 
      closeModal={props.closeModal}
      title={title(props[modelName])}
    >
      <Component {...props} />
    </UpdateModal>
  );

  const mapStateToProps = mapStateToPropsConstructor({
    uiKeyName,
    modelName,
    target,
  });

  const mapActionsToProps = mapActionsToPropsConstructor({
    modalFlagName,
    updateUiPayload,
    target
  });

  const ConnectedContainer = (
    connect(mapStateToProps, mapActionsToProps)(Container)
  );
  
  ConnectedContainer.displayName = displayName;

  return ConnectedContainer;
}

export default createUpdateModalContainer;
