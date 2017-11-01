import './styles.css';
import React from 'react';
import T from 'prop-types';
import MerakiQuoteShowHeader from './MerakiQuoteShowHeader/';
import SearchMerakiDeviceForm from './SearchMerakiDeviceForm/';
import MerakiQuoteShowGlobalOptions from './MerakiQuoteShowGlobalOptions/';
import MerakiQuoteShowActionBar from './MerakiQuoteShowActionBar/';
import {IMerakiQuotes, empty} from '../IMerakiQuotes.js';

class MerakiQuoteShow extends React.Component {
  render() {
    let {merakiQuote={}} = this.props;

    return (
      <div className="MerakiQuoteShow">
        <MerakiQuoteShowHeader {...merakiQuote} />
        <SearchMerakiDeviceForm />
        <MerakiQuoteShowGlobalOptions {...merakiQuote} />
        <MerakiQuoteShowActionBar />
      </div>
    )
  }
}

MerakiQuoteShow.propTypes = {
  merakiQuote: T.shape(IMerakiQuotes),
};

export default MerakiQuoteShow
