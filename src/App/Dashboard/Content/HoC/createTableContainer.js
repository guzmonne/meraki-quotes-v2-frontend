import {connect} from 'react-redux';
import get from 'lodash/get';
import {UPDATE_UI} from '../../../../store/actions.js';

const mapStateToPropsConstructor = ({
  target,
}) => (state) => {
  const offset = get(state, `ui.${target}.offset`);
  const page = get(state, `ui.${target}.page`);

  const items = (
    get(state, `ui.${target}.ids`, [])
    .slice(offset * page, offset * page + page)
    .map(id => (
      get(state, `entities.${target}.${id}`)
    ))
  );

  return {
    items
  };
};

const mapActionsToPropsConstructor = ({
  target,
  encodeKey,
}) => ({
  displayDestroyModal: (item) => ({
    type: UPDATE_UI,
    payload: {
      [target]: {
        displayingDestroyModal: true,
        [`${target}SelectedToDestroyKey`]: encodeKey(item),
      }
    }
  }),
  displayShowModal: (item) => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        displayingShowModal: true,
        [`${target}SelectedToShow`]: encodeKey(item),
      }
    }
  }),
  displayUpdateModal: (item) => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        displayingUpdateModal: true,
        [`${target}SelectedToUpdate`]: encodeKey(item),
      }
    }
  })
});

const createTableContainer = ({
  target,
  encodeKey,
  displayName = 'TableContainer',
}) => Component => {
  const mapStateToProps = mapStateToPropsConstructor({
    target
  });

  const mapActionsToProps = mapActionsToPropsConstructor({
    target,
    encodeKey,
  });

  const Container = connect(mapStateToProps, mapActionsToProps)(Component);

  Container.displayName = displayName;

  return Container;
}

export default createTableContainer;
