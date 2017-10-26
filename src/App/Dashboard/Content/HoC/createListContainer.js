import {connect} from 'react-redux';
import get from 'lodash/get';
import {
  API_INDEX,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';

function paginationKeys(offset, page, ids) {
  let prevItemKey = (
    (offset - 1) * page <= 0 ? ids[0] : ids[(offset - 1) * page]
  );
  
  let nextItemKey = (
    offset * page + page - 1 >= ids.length 
    ? ids[ids.length - 1] 
    : ids[offset * page + page - 1]
  );

  return {prevItemKey, nextItemKey};
}

const mapStateToPropsConstructor = ({
  target,
  fetchingFlag,
  showModalFlag = 'displayingShowModal',
  updateModalFlag = 'displayingUpdateModal',
  destroyModalFlag = 'displayingDestroyModal',
}) => (state) => {
  const offset = get(state, `ui.${target}.offset`);
  const page = get(state, `ui.${target}.page`);
  const ids = get(state, `ui.${target}.ids`, []);

  const {prevItemKey, nextItemKey} = paginationKeys(offset, page, ids);

  return {
    offset,
    page,
    nextItemKey,
    prevItemKey,
    count: get(state, `ui.${target}.ids`, []).length,    
    fetching: get(state, `flags.${fetchingFlag}`),
    displayingShowModal: get(state, `ui.${target}.${showModalFlag}`),
    displayingUpdateModal: get(state, `ui.${target}.${updateModalFlag}`),
    displayingDestroyModal: get(state, `ui.${target}.${destroyModalFlag}`),
  }
};

const updateUIConstructor = (target) => (page, offset) => ({
  type: UPDATE_UI,
  payload: {
    [target]: {
      offset,
      page,
    }
  }
});

const fetchConstructor = (schema, target) => (page=10, offset) => {
  let endpoint = `/${target}?limit=${page * 3}`
  
  if (offset)
    endpoint += `&offset=${offset}`

  return {
    type: API_INDEX,
    payload: {
      endpoint,
      schema: [schema],
      target,
    },
  }
}

const mapActionsToPropsConstructor = ({
  target,
  schema,
}) => {
  const updateUI = updateUIConstructor(target);
  const fetch = fetchConstructor(schema, target);
  
  return {
    paginate: (offset, page, lastItemKey) => {
      if (offset < 0) offset = 0
      return {
        type: DISPATCH_MULTIPLE_ACTIONS,
        payload: [
          updateUI(page, offset),
          fetch(page, lastItemKey)
        ]
      }
    },
    fetch,
  }
};

const createListContainer = ({
  target,
  fetchingFlag,
  showModalFlag,
  updateModalFlag,
  destroyModalFlag,
  schema,
  displayName = 'ListContainer'
}) => (Component) => {
  const mapStateToProps = mapStateToPropsConstructor({
    target,
    fetchingFlag,
    showModalFlag,
    updateModalFlag,
    destroyModalFlag,
  });

  const mapActionsToProps = mapActionsToPropsConstructor({
    target,
    schema,
  });

  const Container = connect(mapStateToProps, mapActionsToProps)(Component);

  Container.displayName = displayName;

  return Container;
}

export default createListContainer;
