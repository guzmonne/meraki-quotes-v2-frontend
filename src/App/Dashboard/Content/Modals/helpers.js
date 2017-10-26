import {UPDATE_UI} from '../../../../store/actions.js';

export const closeModalConstructor = ({
  modalFlagName,
  updateUiPayload,
  target
}) => () => ({
  type: UPDATE_UI,
  payload: {
    [target]: {
      [modalFlagName]: false,
      ...updateUiPayload,
    }
  }
});
