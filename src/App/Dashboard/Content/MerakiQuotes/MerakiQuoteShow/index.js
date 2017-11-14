import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import MerakiQuoteShowHeader from './MerakiQuoteShowHeader/';
import SearchMerakiDeviceForm from './SearchMerakiDeviceForm/';
import MerakiQuoteShowGlobalOptions from './MerakiQuoteShowGlobalOptions/';
import MerakiQuoteShowActionBar from './MerakiQuoteShowActionBar/';
import {IMerakiQuotes} from '../IMerakiQuotes.js';
import Spinner from '../../../../../common/Spinner/';

class MerakiQuoteShow extends React.Component {
  componentWillMount() {
    const key = get(this.props, 'match.params.key');
    if (!key) return;
    this.props.fetch(key);
  }

  updateQuote = (updates) => {
    const key = get(this.props, 'match.params.key');
    if (!key) return;
    this.props.updateQuote(key, updates)
  }

  render() {
    const {updateQuote} = this;
    let {merakiQuote, fetching} = this.props;

    if (!merakiQuote && (fetching === true || fetching === undefined)) 
      return <Spinner color="black" size="xl"/>

    return (
      <div className="MerakiQuoteShow">
        <MerakiQuoteShowHeader {...merakiQuote} onUpdate={updateQuote}/>
        <SearchMerakiDeviceForm onUpdate={updateQuote}/>
        <MerakiQuoteShowGlobalOptions {...merakiQuote} onUpdate={updateQuote}/>
        <MerakiQuoteShowActionBar />
      </div>
    )
  }
}

MerakiQuoteShow.propTypes = {
  merakiQuote: T.shape(IMerakiQuotes),
  fetching: T.bool,
  fetch: T.func,
};

export default MerakiQuoteShow
