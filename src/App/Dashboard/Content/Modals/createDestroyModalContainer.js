import {connect} from 'react-redux';
import get from 'lodash/get';
import DestroyModal from './DestroyModal/';
import {
  API_DESTROY,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {closeModalConstructor} from './helpers.js';

const mapStateToPropsConstructor = ({
  uiIdPath,
  modalTitle,
  okMessage,
}) => (state) => ({
  id: (
    get(state, `ui.${uiIdPath}`)
  ),
  title: modalTitle,
  message: okMessage,
});

const mapActionsToPropsConstructor = ({
  endpoint,
  target,
  modalFlagName,
  updateUiPayload,
}) => {
  const closeModal = closeModalConstructor({
    modalFlagName,
    updateUiPayload,
    target,
  });

  return {
    closeModal,
    onDestroy: (id) => ({
      type: DISPATCH_MULTIPLE_ACTIONS,
      payload: [{
        type: API_DESTROY,
        payload: {
          endpoint,
          target,
          id,
        },
      }, closeModal()]
    })
  };
};


const createDestroyModalContainer = ({
  uiIdPath,
  modalTitle,
  okMessage,
  modalFlagName,
  updateUiPayload,
  endpoint,
  target,
  displayName='DestroyModal'
}) => {
  const mapStateToProps = mapStateToPropsConstructor({
    uiIdPath,
    modalTitle,
    okMessage,
  })

  const mapActionsToProps = mapActionsToPropsConstructor({
    endpoint,
    target,
    modalFlagName,
    updateUiPayload,
  })

  const DestroyModalContainer = (
    connect(mapStateToProps, mapActionsToProps)(DestroyModal)
  );  

  DestroyModalContainer.displayName = displayName;

  return DestroyModalContainer
}

export default createDestroyModalContainer;
