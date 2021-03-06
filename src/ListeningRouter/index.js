// Workaround for React Router v4 blocked updates issue/feature
// https://github.com/ReactTraining/react-router/blob/7f002d35deae5d32dcf27eef9ae9296d27028ee4/packages/react-router/docs/guides/blocked-updates.md
// https://github.com/ReactTraining/react-router/issues/4671

import React from 'react'
import pick from 'lodash/fp/pick.js';
import {UPDATE_LOCATION} from '../store/actions.js';
import {connect} from "react-redux";
import {
  withRouter,
  Route as RRoute,
  Switch as RSwitch
} from "react-router-dom";

class ListeningRouter extends React.Component {
  componentWillMount() {
    this.props.updateLocation(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    this.props.updateLocation(nextProps.location);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const ListeningRouterContainer = (
  connect(null, {
    updateLocation: (location) => ({
      type: UPDATE_LOCATION,
      payload: location,
    })
  })(ListeningRouter)
);

ListeningRouterContainer.displayName = 'ListeningRouterContainer';

const ListeningRouterContainerWithRouter = (
  withRouter(ListeningRouterContainer)
);

ListeningRouterContainerWithRouter.displayName = (
  'ListeningRouterContainerWithRouter'
);

export default ListeningRouterContainerWithRouter

const addLocation = connect(pick('location'));
export const Route = addLocation(RRoute);
export const Switch = addLocation(RSwitch);

export const routeReducer = (state={}, action) => {
  if (action.type === UPDATE_LOCATION) {
      return {
        ...state, 
        ...action.payload
      };
  }

  return state;
};
