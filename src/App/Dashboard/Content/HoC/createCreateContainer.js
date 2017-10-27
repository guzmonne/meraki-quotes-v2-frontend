import {connect} from 'react-redux';
import get from 'lodash/get';
import {
  API_CREATE,
  UPDATE_UI,
} from '../../../../store/actions.js';

const mapStateToPropsConstructor = ({
  target,
  formName = 'form',
}) => (state) => ({
  item: get(state, `ui.${target}.${formName}`),
  error: get(state, `ui.${target.toLowerCase()}ApiCreate.error`),
  creating: get(state, `flags.${target.toLowerCase()}ApiCreate`)
});

const createConstructor = ({
  target,
  schema,
  formName = 'form',
}) => (body, formData) => ({
  type: API_CREATE,
  payload: {
    body,
    endpoint: `/${target}`,
    schema: schema,
    target,
    formData,
    formName,
  },
})

const mapActionsToPropsConstructor = ({
  target,
  schema,
  formName,
}) => {
  const create = createConstructor({
    target,
    schema,
    formName,
  });

  return {
    create,
    setForm: (form) => ({
      type: UPDATE_UI,
      payload: {
        [target]: {
          form,
        }
      }
    })
  }
};

const createCreateContainer = (config) => (Component) => {
  const mapStateToProps = mapStateToPropsConstructor(config);
  const mapActionsToProps = mapActionsToPropsConstructor(config);

  const Container = connect(mapStateToProps, mapActionsToProps)(Component);

  Container.displayName = config.displayName || 'CreateContainer';

  return Container;
}

export default createCreateContainer;
