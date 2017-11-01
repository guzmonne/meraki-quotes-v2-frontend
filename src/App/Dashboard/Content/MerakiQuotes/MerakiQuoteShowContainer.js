import {connect} from 'react-redux';
/*
import get from 'lodash/get';
import {
  API_SHOW,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
*/
import MerakiQuoteShow from './MerakiQuoteShow/';

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

const MerakiQuoteShowContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiQuoteShow)
);

MerakiQuoteShowContainer.displayName = 'MerakiQuoteShowContainer';

export default MerakiQuoteShowContainer;
