import {connect} from 'react-redux';
import get from 'lodash/get';
import _orderBy from 'lodash/orderBy';
import {UPDATE_UI} from '../../../../store/actions.js';

const mapStateToPropsConstructor = ({
  target,
  orderBy,
}) => (state) => {
  const offset = get(state, `ui.${target}.offset`);
  const page = get(state, `ui.${target}.page`);

  let items = (
    get(state, `ui.${target}.ids`, [])
    .slice(offset * page, offset * page + page)
    .map(id => (
      get(state, `entities.${target}.${id}`)
    ))
  );

  if (orderBy)
    items = _orderBy(items, (item) => item[orderBy]).reverse();

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
      [target]: {
        displayingShowModal: true,
        [`${target}SelectedToShowKey`]: encodeKey(item),
      }
    }
  }),
  displayUpdateModal: (item) => ({
    type: UPDATE_UI,
    payload: {
      [target]: {
        displayingUpdateModal: true,
        [`${target}SelectedToUpdateKey`]: encodeKey(item),
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
